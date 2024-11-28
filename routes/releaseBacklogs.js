const express = require('express');
const router = express.Router();
const controller = require('../controllers/releaseBacklogs');

/* POST create release backlog. */
router.post('/',controller.create);

/* GET release backlog where id is. */
router.get('/:id',controller.index);

/* GET release backlogs listing. */
router.get('/:page?',controller.list);

/* PUT replace specific release backlog */
router.put('/:id',controller.replace);

/* PATCH update specific release backlog */
router.patch('/:id',controller.update);

/* DELETE delete specific release backlog */
router.delete('/:id',controller.destroy);

module.exports = router;