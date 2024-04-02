var Pizza = require('../models/pizza');

exports.pizza_list = function(req,res){
    res.send('NOT IMPLEMENTED: Pizza list');
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