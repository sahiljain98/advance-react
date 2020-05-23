import express from 'express';

import config from 'config';
import serverRender from 'renderer/server';
import {data} from 'testData';

// const rp      = require('request-promise-native');
// const options = {
//   uri: 'http://10.5.62.104/airtel-dth-plan/rest/dth/fetch/v1/dthConnectionServices?accountId=3000018563',
//   headers: {
//       // 'User-Agent': 'Request-Promise'
//       "adsHeader": "cccccc",
//       "googleCookie": "google.com",
//       'iv-user':"8787008271",
//       'Content-Type':"application/json"
//   },
//   json: true // Automatically parses the JSON string in the response
// };


const app = express();

// set default folder
app.use(express.static('public'));

// set default engine to ejs
app.set('view engine', 'ejs');

// for frontend - react
app.get('/', async (req, res) => { 
  const initalContent = await serverRender();
  res.render('index',{...initalContent});
});

// for api - node
app.get('/data', (req, res) => { res.send(data);
});

// app.get('/api', (req, res) => {
//   rp(options)
//   .then(parsedBody => {
//       res.send(parsedBody);
//   })
//   .catch(err => {
//       res.send(err);
//   });
// });

// enable port
app.listen(config.port, function listenHandler() { console.info(`Running on PORT ${config.port}...`);
});