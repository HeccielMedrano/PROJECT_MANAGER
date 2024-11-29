const express = require('express');
const router = express.Router();
const controller = require('../controllers/releaseBacklogs');
const { roleMiddleware } = require('../middleware/roleMiddleware');

/* POST create release backlog. */
router.post('/', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.create);

/* GET release backlog where id is. */
router.get('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER', 'DEVELOPER'), controller.index);

/* GET release backlogs listing. */
router.get('/:page?', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER', 'DEVELOPER'), controller.list);

/* PUT replace specific release backlog */
router.put('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.replace);

/* PATCH update specific release backlog */
router.patch('/:id',roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.update);

/* DELETE delete specific release backlog */
router.delete('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.destroy);

module.exports = router;