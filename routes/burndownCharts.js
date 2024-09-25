const express = require('express');
const router = express.Router();
const controller = require('../controller/burndownCharts');

/* POST create burndownChart. */
router.post('/', controller.create);

/* GET burndownCharts listing. */
router.get('/', controller.list);

/* GET burndownChart by id. */
router.get('/:id', controller.index);

/* PUT replace burndownChart by id. */
router.put('/:id', controller.replace);

/* PATCH update burndownChart by id. */
router.patch('/:id', controller.update);

/* DELETE burndownChart by id. */
router.delete('/:id', controller.destroy);

module.exports = router;
