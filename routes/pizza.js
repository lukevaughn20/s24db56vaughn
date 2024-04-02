var express = require('express');
const pizza_controller = require('../controllers/pizzas');
var router = express.Router();

/* GET home page. */
router.get('/', pizza_controller.pizza_view_all_Page);

module.exports = router;
