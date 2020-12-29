const Html = (html, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="main.css" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
        <script type="module" src="main.bundle.js"></script>
        <script nomodule src="nomodule.bundle.js"></script>
      </body>
    </html>
  `;
};

export default Html;