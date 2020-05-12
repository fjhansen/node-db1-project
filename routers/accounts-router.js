const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("accounts")
  .then(accounts => {
    res.status(200).json({ data: accounts})
  })
  .catch(error => {
    console.error(error);
    res.status(500).json({ error: error.message })
  })
})

router.post("/", (req, res) => {
  const post = req.body
  if(isValidPost(post)) {
  db("accounts")
  .insert()
  .then(accounts => {
    res.status(201).json({ data: accounts})
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ message: error.message})
  })
  } else {
    res.status(400).json({message: 'please provide valid title and contents for post'})
  }
  });

  function isValidPost(post) {
    return Boolean(post.title && post.contents);
  }


module.exports = router;