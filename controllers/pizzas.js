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
        res.send(`{"error":document for id ${req.params.id} not found`);
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

exports.pizza_delete = async function(req,res){
    console.log("delete" + req.params.id)
    try{
        result = await Pizza.findByIdAndDelete(req.params.id)
        console.log("Removed" + result)
        res.send(result)
    }catch(err){
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

exports.pizza_update_put = async function(req, res){
    console.log(`updated on id${req.params.id} with body ${JSON.stringify(req.body)}`);
    try{
        let toUpdate = await Pizza.findById(req.params.id)
        if(req.body.pizza_type)
            toUpdate.pizza_type = req.body.pizza_type;
        if(req.body.toppings)
            toUpdate.toppings = req.body.toppings;
        if(req.body.price)
            toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Success" + result)
        res.send(result)
    }catch (err){
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

exports.pizza_view_one_Page = async function(req, res){
    console.log("single view for id" + req.query.id)
    try{
        result = await Pizza.findById(req.query.id)
        res.render('pizzadetail', {title:'Pizza Detail',toShow:result});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}