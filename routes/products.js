var products = require("../public/javascripts/products.json")
var express = require("express");
const router = express.Router();


router.get('/', function (req, res) {
    res.json({
        products:products
    })

});
router.get('/instock/:qt', function (req, res) {
    var list = Object.entries(products).map((e) => ( 
        e[1].stock >= req.params.qt?{ 
        [e[0]]: e[1] 
    } :{}
        ));
   
    res.json({
        products:list
    })
;


});
router.get('/:id', function (req, res) {
  
            res.json({
                products:products[req.params.id]
            })
       ;
   

});
router.get('/:id/:qt', function (req, res) {
    
    res.json({
        id:req.params.id,
        qt:req.params.qt,
        unit_price:products[req.params.id].price ,
        total_price:products[req.params.id].price * req.params.qt
    })
;


});




module.exports = router