const express = require('express');
const router = express.Router();
const controller = require('../controllers/sprintBacklogs');
const { roleMiddleware } = require('../middleware/roleMiddleware');

/* POST create sprint backlog. */
router.post('/', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.create);

/* GET sprint backlog where id is. */
router.get('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER', 'DEVELOPER'), controller.index);

/* GET sprint backlogs listing. */
router.get('/:page?', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER', 'DEVELOPER'), controller.list);

/* PUT replace specific sprint backlog */
router.put('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.replace);

/* PATCH update specific sprint backlog */
router.patch('/:id',roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'),controller.update);

/* DELETE delete specific sprint backlog */
router.delete('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.destroy);

module.exports = router;