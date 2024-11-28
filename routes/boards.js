const express = require('express');
const router = express.Router();
const controller = require('../controllers/boards');

/* POST create board. */
router.post('/',controller.create);

/* GET board where id is. */
router.get('/:id',controller.index);

/* GET boards listing. */
router.get('/:page?',controller.list);

/* PUT replace specific board */
router.put('/:id',controller.replace);

/* PATCH update specific board */
router.patch('/:id',controller.update);

/* DELETE delete specific board */
router.delete('/:id',controller.destroy);

module.exports = router;