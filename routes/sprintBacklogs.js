const express = require('express');
const router = express.Router();
const controller = require('../controller/sprintBacklogs');

/* POST create sprintBacklog. */
router.post('/', controller.create);

/* GET sprintBacklogs listing. */
router.get('/', controller.list);

/* GET sprintBacklog by id. */
router.get('/:id', controller.index);

/* PUT replace sprintBacklog by id. */
router.put('/:id', controller.replace);

/* PATCH update sprintBacklog by id. */
router.patch('/:id', controller.update);

/* DELETE sprintBacklog by id. */
router.delete('/:id', controller.destroy);

module.exports = router;
