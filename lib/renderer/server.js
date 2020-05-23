import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import config from 'config';

import App from 'components/App';
import StateApi from 'state-api';

const serverRender = async() => {
  
  // hit api - S2S
  const response = await axios(`http://${config.host}:${config.port}/data`);
  const store  = new StateApi(response.data);

  return {
    initalMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: response.data
  };
};

export default serverRender;