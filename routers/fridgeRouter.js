const
    express = require('express'),
    router = express.Router(),
    Fridge = require('../controllers/fridges');

router.get('/', Fridge.showAll);
router.get('/:id', Fridge.showFridge);
router.post('/', Fridge.create);

module.exports = router;