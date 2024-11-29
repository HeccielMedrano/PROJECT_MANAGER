const express = require('express');
const router = express.Router();
const controller = require('../controllers/columns');
const { roleMiddleware } = require('../middleware/roleMiddleware');

/* POST create column. */
router.post('/', roleMiddleware('SCRUM_MASTER'), controller.create);

/* GET column where id is. */
router.get('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER', 'DEVELOPER'), controller.index);

/* GET columns listing. */
router.get('/:page?', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER', 'DEVELOPER'), controller.list);

/* PUT replace specific column */
router.put('/:id', roleMiddleware('SCRUM_MASTER'), controller.replace);

/* PATCH update specific column */
router.patch('/:id', roleMiddleware('SCRUM_MASTER'), controller.update);

/* DELETE delete specific column */
router.delete('/:id', roleMiddleware('SCRUM_MASTER'), controller.destroy);

module.exports = router;