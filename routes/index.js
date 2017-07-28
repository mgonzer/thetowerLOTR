const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET home page. */
router.get('/', (req, res) => {
  queries.getMenu()
  .then(menu=>{
    res.json(menu)
  })
});

router.get('/:id', (req, res) => {
  queries.getOne(req.params.id)
    .then(item=> {
      res.json(item)
    })
});

router.post('/', (req, res) => {
  queries.createOne(req.body)
  .then(results=>{
    res.send(results[0])
  })
})



module.exports = router;
