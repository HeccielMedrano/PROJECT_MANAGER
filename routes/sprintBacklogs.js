const express = require('express');
const router = express.Router();
const controller = require('../controllers/sprintBacklogs');

/* POST create sprint backlog. */
router.post('/',controller.create);

/* GET sprint backlog where id is. */
router.get('/:id',controller.index);

/* GET sprint backlogs listing. */
router.get('/:page?',controller.list);

/* PUT replace specific sprint backlog */
router.put('/:id',controller.replace);

/* PATCH update specific sprint backlog */
router.patch('/:id',controller.update);

/* DELETE delete specific sprint backlog */
router.delete('/:id',controller.destroy);

module.exports = router;