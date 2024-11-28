const express = require('express');
const router = express.Router();
const controller = require('../controllers/cards');

/* POST create card. */
router.post('/',controller.create);

/* GET card where id is. */
router.get('/:id',controller.index);

/* GET cards listing. */
router.get('/:page?',controller.list);

/* PUT replace specific card */
router.put('/:id',controller.replace);

/* PATCH update specific card */
router.patch('/:id',controller.update);

/* DELETE delete specific cards */
router.delete('/:id',controller.destroy);

module.exports = router;