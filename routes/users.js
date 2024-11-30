const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');
const { roleMiddleware } = require('../middleware/roleMiddleware');

// POST create user - only SCRUM_MASTER can create users.
router.post('/', roleMiddleware('SCRUM_MASTER'), controller.create);

// GET users listing - PRODUCT_OWNER and SCRUM_MASTER can view users.
router.get('/', roleMiddleware('SCRUM_MASTER'), controller.list);

// GET user by id - PRODUCT_OWNER and SCRUM_MASTER can view users.
router.get('/:id', roleMiddleware('SCRUM_MASTER'), controller.index);

// PUT replace user by id - only SCRUM_MASTER can replace users.
router.put('/:id', roleMiddleware('SCRUM_MASTER'), controller.replace);

// PATCH update user by id - only SCRUM_MASTER can update users.
router.patch('/:id', roleMiddleware('SCRUM_MASTER'), controller.update);

// DELETE user - only SCRUM_MASTER can delete users.
router.delete('/:id', roleMiddleware('SCRUM_MASTER'), controller.destroy);

module.exports = router;


/* router.post('/', controller.create);
router.get('/', controller.list);
router.get('/:id',controller.index);
router.put('/:id', controller.replace);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy); 

module.exports = router; */





