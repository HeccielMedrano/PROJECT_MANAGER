const express = require('express');
const router = express.Router();
const controller = require('../controller/skills');

/* POST create skill. */
router.post('/', controller.create);

/* GET skills listing. */
router.get('/', controller.list);

/* GET skill by id. */
router.get('/:id', controller.index);

/* PUT replace skill by id. */
router.put('/:id', controller.replace);

/* PATCH update skill by id. */
router.patch('/:id', controller.update);

/* DELETE skill by id. */
router.delete('/:id', controller.destroy);

module.exports = router;
