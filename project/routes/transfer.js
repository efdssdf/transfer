var express = require('express');
var router = express.Router();
var TransferModel = require('../model/Transfer.js');
var mem = require('../util/mem.js')

router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    mem.get('transfer_' + id).then(function (value) {
        if(value){
            value = JSON.parse(value)
            var links = []
            if(value.type==1){
                for (var i = 0; i < value.links.length; i++) {
                    var link = value.links[i];
                    var weight =10;
                    if(value.weights>i){
                        weight = value.weights[i]
                    }
                    for (var j = 0; j < weight; j++) {
                        links.push(link)
                    }
                }
            }else{
                links = value.links
            }
            var link = links[parseInt(Math.random()*links.length)]
            res.redirect(link)
        }else {
            TransferModel.find({id: id}, function (err, data) {
                if (data && data[0]&& data[0].links) {
                    var value = data[0];
                    mem.set('transfer_' + req.params.id, JSON.stringify(value), 1*60).then(function () {
                        //console.log('---------set transfer value---------')
                    })
                    var links = []
                    if(value.type==1){
                        for (var i = 0; i < value.links.length; i++) {
                            var link = value.links[i];
                            var weight =10;
                            if(value.weights>i){
                                weight = value.weights[i]
                            }
                            for (var j = 0; j < weight; j++) {
                                links.push(link)
                            }
                        }
                    }else{
                        links = value.links
                    }
                    
                    //console.log('----lixin----', link)
                    var link = links[parseInt(Math.random()*links.length)]
                    res.redirect(link)
                }else{
                    res.send('没有查询到此链接，请先创建')
                }
            })

        }
    }).catch(function (err) {
        console.log(err);
    });
})

module.exports = router;
