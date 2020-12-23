const Html = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="main.css" />
      </head>
      <body>
        <div id="root">{props.children}</div>
        <script src="main.js"/>
      </body>
    </html>
  );
};

export default Html;