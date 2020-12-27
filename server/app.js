import express from 'express';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import Html from './Html.js';
import ServerSideMarkup, { store } from '../dist/main.js';
import { Provider } from 'react-redux';

const app = express();
const port = 3000

// client bundle output to here.
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ServerSideMarkup/>
    </Provider>
  );

  res.send(
    '<!DOCTYPE html>' +
    ReactDOMServer.renderToStaticMarkup(
      <Html app={app} state={store.getState()} />
    )
  );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})