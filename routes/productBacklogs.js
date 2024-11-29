const express = require('express');
const router = express.Router();
const controller = require('../controllers/productBacklogs');
const { roleMiddleware } = require('../middleware/roleMiddleware');

/* POST create product backlog. */
router.post('/', roleMiddleware('SCRUM_MASTER'), controller.create);

/* GET product backlog where id is. */
router.get('/:id', roleMiddleware('SCRUM_MASTER', 'DEVELOPER'), controller.index);

/* GET product backlogs listing. */
router.get('/:page?',roleMiddleware('SCRUM_MASTER', 'DEVELOPER'), controller.list);

/* PUT replace specific product backlog */
router.put('/:id', roleMiddleware('SCRUM_MASTER'), controller.replace);

/* PATCH update specific product backlog */
router.patch('/:id', roleMiddleware('SCRUM_MASTER'), controller.update);

/* DELETE delete specific product backlog */
router.delete('/:id', roleMiddleware('SCRUM_MASTER'), controller.destroy);

module.exports = router;