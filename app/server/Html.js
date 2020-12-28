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
        <div dangerouslySetInnerHTML={{__html: props.app}} id="root"></div>
        {props.state
          ? <script dangerouslySetInnerHTML={{__html: `window.__REDUX_STATE__ = ${JSON.stringify(props.state)}`}}></script>
          : null
        }
        <script type="module" src="main.bundle.js"/>
        <script noModule src="nomodule.bundle.js"/>
      </body>
    </html>
  );
};

export default Html;