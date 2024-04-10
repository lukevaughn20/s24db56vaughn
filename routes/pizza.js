var express = require('express');
const pizza_controller = require('../controllers/pizzas');
var router = express.Router();

/* GET home page. */
router.get('/', pizza_controller.pizza_view_all_Page);
router.get('/detail', pizza_controller.pizza_view_one_Page);
router.get('/create', pizza_controller.pizza_create_Page);

module.exports = router;
