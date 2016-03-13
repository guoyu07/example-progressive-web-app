import router from './routes/router';
import component from './component';
import React from 'react';

import Welcome from './components/welcome';

router.get('/', (req, res) => {
  res.send(component(<Welcome />));
});

export default router;
