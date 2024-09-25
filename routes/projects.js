const express = require('express');
const router = express.Router();
const controller = require('../controller/projects');

/* POST create project. */
router.post('/', controller.create);

/* GET projects listing. */
router.get('/', controller.list);

/* GET project by id. */
router.get('/:id', controller.index);

/* PUT replace project by id. */
router.put('/:id', controller.replace);

/* PATCH update project by id. */
router.patch('/:id', controller.update);

/* DELETE project by id. */
router.delete('/:id', controller.destroy);

module.exports = router;
