import router from './router';

router.get('/', (req, res) => {
  res.send('WELCOME');
});

export default router;
