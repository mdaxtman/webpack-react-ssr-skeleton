import express from 'express';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import Html from './Html.js';
import ServerSideMarkup from '../dist/main.js';
import fs from 'fs';

const app = express();
const port = 3000

// client bundle output to here.
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  const renderedPage = (
    <Html >
      <ServerSideMarkup/>
    </Html>
  );

  res.send('<!DOCTYPE html>' + ReactDOMServer.renderToString(renderedPage));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})