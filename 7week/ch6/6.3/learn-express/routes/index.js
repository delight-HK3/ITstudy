const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  res.send('Hello, Express');
});

router.get('/user/:id', function(req, res) {
  console.log(req.params, req.query);
});
module.exports = router;
