var express = require('express');
var router = express.Router();
var usersApiController = require ("../../controllers/api/usersApiController");

router.get("/" , usersApiController );

router.get('/', usersApiController.list);
router.get('/:id', usersApiController.detail);
// router.post('/create', apiUserController.create);
// router.put('/update/:id', apiUserController.update);
// router.delete('/delete/:id', apiUserController.delete)

module.exports = router;