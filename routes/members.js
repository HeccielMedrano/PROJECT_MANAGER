const express = require('express');
const router = express.Router();
const controller = require('../controller/members');

/* POST create member. */
router.post('/', controller.create);

/* GET members listing. */
router.get('/', controller.list);

/* GET member by id. */
router.get('/:id', controller.index);

/* PUT replace member by id. */
router.put('/:id', controller.replace);

/* PATCH update member by id. */
router.patch('/:id', controller.update);

/* DELETE member by id. */
router.delete('/:id', controller.destroy);

module.exports = router;
