var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var pizza_controller = require('../controllers/pizzas');

router.get('/', api_controller.api);
router.post('/pizzas', pizza_controller.pizza_create_post);
router.delete('/pizzas/:id', pizza_controller.pizza_delete);
router.put('/pizzas/:id', pizza_controller.pizza_update_put);
router.get('/pizzas/:id', pizza_controller.pizza_detail);
router.get('/pizzas', pizza_controller.pizza_list);

module.exports = router;