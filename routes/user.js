const router = require('express').Router();

// respond with "hello world" when a GET request is made to the homepage
router.get('/usertest', (req, res) => {
  res.send('User Test is successfull world')
})

// POST method route
router.post('/userposttest', (req, res) => {
  const username = req.body.username;
  res.send("Your Username is:" + username)
})


module.exports = router;