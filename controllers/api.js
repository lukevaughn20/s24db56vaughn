exports.api = function(req, res){
    res.write('[');
    res.write('{"resource":"pizzas", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
};