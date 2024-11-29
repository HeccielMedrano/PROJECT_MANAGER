const express = require('express');
const router = express.Router();
const controller = require('../controllers/boards');
const { roleMiddleware } = require('../middleware/roleMiddleware');

/* POST create project. */
router.post('/', roleMiddleware('SCRUM_MASTER'), controller.create);

/* GET project where id is. */
router.get('/:id', roleMiddleware('SCRUM_MASTER'), controller.index);

/* GET projects listing. */
router.get('/:page?', roleMiddleware('SCRUM_MASTER'), controller.list);

/* PUT replace specific project */
router.put('/:id', roleMiddleware('SCRUM_MASTER'), controller.replace);

/* PATCH update specific project */
router.patch('/:id', roleMiddleware('SCRUM_MASTER'), controller.update);

/* DELETE delete specific project */
router.delete('/:id', roleMiddleware('SCRUM_MASTER'), controller.destroy);

module.exports = router;