const express = require('express');
const router = express.Router();
const controller = require('../controllers/productBacklogs');

/* POST create product backlog. */
router.post('/',controller.create);

/* GET product backlog where id is. */
router.get('/:id',controller.index);

/* GET product backlogs listing. */
router.get('/:page?',controller.list);

/* PUT replace specific product backlog */
router.put('/:id',controller.replace);

/* PATCH update specific product backlog */
router.patch('/:id',controller.update);

/* DELETE delete specific product backlog */
router.delete('/:id',controller.destroy);

module.exports = router;