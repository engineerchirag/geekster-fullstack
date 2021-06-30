const express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    var filters = req.query;
    console.log('****', filters);
    var data = {
        "results": [{
            "id": 1,
            "title": "Moisturiser",
            "mrp": "$7.00",
            "discounted_price": "$6.00",
            "image": "images/of16.png",
            "quantity": 2,
            "selectedQuantity": 0,
            "description": [],
        }, {
            "id": 2,
            "title": "Lady Finger(250 g)",
            "mrp": "$8.00",
            "discounted_price": "$6.00",
            "image": "images/of17.png",
            "quantity": 2
        }, {
            "id": 3,
            "title": "Ribbon(1 pc)",
            "mrp": "$10.00",
            "discounted_price": "$7.00",
            "image": "images/of18.png",
            "quantity": 2
        }, {
            "id": 4,
            "title": "Grapes(500 g)",
            "mrp": "$11.00",
            "discounted_price": "$6.00",
            "image": "images/of19.png",
            "quantity": 2
        }, {
            "id": 5,
            "title": "Clips(1 pack)",
            "mrp": "$12.00",
            "discounted_price": "$6.00",
            "image": "images/of20.png",
            "quantity": 4
        }, {
            "id": 6,
            "title": "Conditioner(250 g)",
            "mrp": "$18.00",
            "discounted_price": "$16.00",
            "image": "images/of21.png",
            "quantity": 5
        }, {
            "id": 7,
            "title": "Cleaner(250 kg)",
            "mrp": "$17.00",
            "discounted_price": "$16.00",
            "image": "images/of22.png",
            "quantity": 6
        }, {
            "id": 8,
            "title": "Gel(150 g)",
            "mrp": "$14.00",
            "discounted_price": "$10.00",
            "image": "images/of22.png",
            "quantity": 0
        }],
        "moreAvailable": true,
        "demand": "High Demand"
    };

    const results = data.results.filter(item => item.quantity > 0);
    res.send({
        ...data,
        results,
    });
});

module.exports = router;