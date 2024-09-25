const express = require('express');
const router = express.Router();
const controller = require('../controller/productBacklogs');

/* POST create productBacklog. */
router.post('/', controller.create);

/* GET productBacklogs listing. */
router.get('/', controller.list);

/* GET productBacklog by id. */
router.get('/:id', controller.index);

/* PUT replace productBacklog by id. */
router.put('/:id', controller.replace);

/* PATCH update productBacklog by id. */
router.patch('/:id', controller.update);

/* DELETE productBacklog by id. */
router.delete('/:id', controller.destroy);

module.exports = router;
