import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Example Progressive Web App');
});

app.listen(3000, () => {
  console.log('App Listening on Port 3000...');
});

