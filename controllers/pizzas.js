const { ExplainVerbosity } = require('mongodb');
var Pizza = require('../models/pizza');

exports.pizza_list = async function(req,res){
    try{
        thePizzas = await Pizza.find();
        res.send(thePizzas);
    }
    catch(err){
        res.status(500);
        res.send(`{"error":${err}}`);
    }
};

exports.pizza_detail = async function(req,res){
    console.log("detail" + req.params.id);
    try{
        result = await Pizza.findById(req.params.id);
        res.send(result);
    }catch(error)
    {
        res.status(500);
        res.send(`{"error":document for id ${req.params.id}not found`);
    }
};

exports.pizza_create_post = async function(req,res){
    console.log(req.body)
    let document = new Pizza();
    document.pizza_type = req.body.pizza_type;
    document.toppings = req.body.toppings;
    document.price = req.body.price;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error":${err}}`);
    }
    
};

exports.pizza_delete = function(req,res){
    res.send('NOT IMPLEMENTED: Pizza delete DELETE ' + req.params.id);
};

exports.pizza_update_put = function(req, res){
    res.send('NOT IMPLEMENTED: Pizza update PUT' + req.params.id);
};

exports.pizza_view_all_Page = async function(req,res){
    try{
        thePizzas = await Pizza.find();
        res.render('pizza', {title:'Pizza Search Result', results:thePizzas});
    }
    catch(err){
        res.status(500);
        res.send(`"error";${err}`);
    }
}