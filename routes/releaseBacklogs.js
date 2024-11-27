const express = require('express');
const router = express.Router();
const controller = require('../controller/releaseBacklogs');

/* POST create releaseBacklog. */
router.post('/', controller.create);

/* GET releaseBacklogs listing. */
router.get('/:page?', controller.list);

/* GET releaseBacklog by id. */
router.get('/:id', controller.index);

/* PUT replace releaseBacklog by id. */
router.put('/:id', controller.replace);

/* PATCH update releaseBacklog by id. */
router.patch('/:id', controller.update);

/* DELETE releaseBacklog by id. */
router.delete('/:id', controller.destroy);

module.exports = router;
