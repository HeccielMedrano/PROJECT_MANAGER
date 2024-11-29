const express = require('express');
const router = express.Router();
const controller = require('../controllers/cards');
const { roleMiddleware } = require('../middleware/roleMiddleware');

/* POST create card. */
router.post('/', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.create);

/* GET card where id is. */
router.get('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER', 'DEVELOPER'), controller.index);

/* GET cards listing. */
router.get('/:page?', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER', 'DEVELOPER'), controller.list);

/* PUT replace specific card */
router.put('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.replace);

/* PATCH update specific card */
router.patch('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.update);

/* DELETE delete specific cards */
router.delete('/:id', roleMiddleware('SCRUM_MASTER', 'PRODUCT_OWNER'), controller.destroy);

module.exports = router;