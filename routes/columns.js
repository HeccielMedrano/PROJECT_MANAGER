const express = require('express');
const router = express.Router();
const controller = require('../controllers/columns');

/* POST create column. */
router.post('/',controller.create);

/* GET column where id is. */
router.get('/:id',controller.index);

/* GET columns listing. */
router.get('/:page?',controller.list);

/* PUT replace specific column */
router.put('/:id',controller.replace);

/* PATCH update specific column */
router.patch('/:id',controller.update);

/* DELETE delete specific column */
router.delete('/:id',controller.destroy);

module.exports = router;