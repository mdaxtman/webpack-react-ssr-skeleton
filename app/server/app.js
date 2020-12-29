import express from 'express';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import Html from './Html.js';
import { Provider } from 'react-redux';
import ReactApp, { createStore, StaticRouter } from '../public/main.bundle.js';

const app = express();
const port = 3000

// client bundle output to here.
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  const store = createStore();
  const context = {};

  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <ReactApp/>
      </Provider>
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.end();
  } else {
    res.status(200);
    res.send(
      '<!DOCTYPE html>' +
      ReactDOMServer.renderToStaticMarkup(
        <Html app={app} state={store.getState()} />
      )
    );
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})