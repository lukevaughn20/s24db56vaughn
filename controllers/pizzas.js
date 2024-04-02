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

exports.pizza_detail = function(req,res){
    res.send('NOT IMPLEMENTED: Pizza detail: ' + req.params.id);
};

exports.pizza_create_post = function(req,res){
    res.send('NOT IMPLEMENTED: Pizza create POST');
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