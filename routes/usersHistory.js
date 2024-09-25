const express = require('express');
const router = express.Router();
const controller = require('../controller/usersHistory');

/* POST create userHistory. */
router.post('/', controller.create);

/* GET usersHistory listing. */
router.get('/', controller.list);

/* GET userHistory by id. */
router.get('/:id', controller.index);

/* PUT replace userHistory by id. */
router.put('/:id', controller.replace);

/* PATCH update userHistory by id. */
router.patch('/:id', controller.update);

/* DELETE userHistory by id. */
router.delete('/:id', controller.destroy);

module.exports = router;
