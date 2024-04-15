var express = require('express');
const pizza_controller = require('../controllers/pizzas');
var router = express.Router();

const secured = (req,res,next)=>{
    if(req.user){
        return next();
    }
    res.redirect("/login");
}

/* GET home page. */
router.get('/', pizza_controller.pizza_view_all_Page);
router.get('/detail', pizza_controller.pizza_view_one_Page);
router.get('/create', secured,pizza_controller.pizza_create_Page);
router.get('/update', secured, pizza_controller.pizza_update_Page);
router.get('/delete', secured, pizza_controller.pizza_delete_Page);


module.exports = router;
