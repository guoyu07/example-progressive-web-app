import express from 'express';
import router from './app/index';

const app = express();

app.use(router);
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('App Listening on Port 3000...');
});

