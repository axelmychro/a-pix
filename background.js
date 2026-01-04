chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    try {
      const originalUrl = details.url
      const url = new URL(details.url)

      if (url.hostname !== 'pbs.twimg.com') return

      url.pathname = url.pathname.replace(/\.(jpg|jpeg|png|webp)$/i, '')
      url.search = ''
      url.searchParams.set('format', 'jpg')
      url.searchParams.set('name', 'orig')

      const newUrl = url.toString()

      if (newUrl === originalUrl) return

      return { redirectUrl: newUrl }
    } catch {
      return
    }
  },
  { urls: ['*://pbs.twimg.com/media/*'] },
  ['blocking']
)
