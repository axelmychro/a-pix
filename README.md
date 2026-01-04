## a-pix

Derived from "apex" which means the top or highest part of something, in this
context means **A**-grade **pix**els.

### How it works

1. Find an X post with image
2. Open the image in a new tab
3. The default image URL uses parameters like `?format=jpg&name=large`, which
   limits resolution.
4. a-pix automatically rewrites the URL to `?format=jpg&name=orig`, fetching the
   original size and quality. `orig` name fetches original size and quality of
   the image.
