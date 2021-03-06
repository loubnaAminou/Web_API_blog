const router = require('express').Router(); 
const usersRepo = require('../repositories/Users') 

/* GET users listing. */ 
router.get('/', async function(req, res, next) { 
  res.send(await usersRepo.getAllUsers()) 
});

router.get('/page/:page', async function(req, res, next) { 
  // console.log("page "+req.params.page);
  res.send(await usersRepo.getUsers(req.params.page)) 
});

router.get('/:id',async function(req, res, next) { 
  res.send(await usersRepo.getUser(req.params.id) ) 
});

router.get('/role/:role',async function(req, res, next) { 
  console.log(req.params.role)
  res.send(await usersRepo.getUserByRole(req.params.role) ) 
});

router.put('/:id',async function(req, res, next) { 
  usersRepo.updateUser(req.params.id,req.body);
  res.send({
    msg : "User N° "+req.params.id+" is updated successfully"
  })});

router.delete('/:id',async function(req, res, next) { 
  usersRepo.deleteUser(req.params.id);
  res.send({
    msg : "User N° "+req.params.id+" is deleted successfully"
  })
});

router.post('/', function(req, res, next) { 
  console.log(req.body);
  usersRepo.newUser(req.body);
  res.json({
    msg : req.body.username+" is added successfully"
  })
});

  module.exports = router;
