const express = require('express');
const router = express.Router();
const controller = require('../controllers/projects');

/* POST create project. */
router.post('/',controller.create);

/* GET project where id is. */
router.get('/:id',controller.index);

/* GET projects listing. */
router.get('/:page?',controller.list);

/* PUT replace specific project */
router.put('/:id',controller.replace);

/* PATCH update specific project */
router.patch('/:id',controller.update);

/* DELETE delete specific project */
router.delete('/:id',controller.destroy);

module.exports = router;