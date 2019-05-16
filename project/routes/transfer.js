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
                    if(value.weights.length>i){
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
            link= getLink(req,value,link)
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
                            if(value.weights.length>i){
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
                    link= getLink(req,value,link)
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

function getLink(req,value,link){
    if(value.back_urls&&value.back_urls.length){
        let back = req.protocol+'://'+req.hostname+'/transfer/back/'+value.id+'?index=0'
        back = encodeURIComponent(back)
        if(link.indexOf('?')!=-1){
            link+='&back='+back
        }else{
            link+='?back='+back
        }
    }
    return link
}

router.get('/back/:id', function (req, res, next) {
    let id = req.params.id;
    let index = parseInt(req.query.index);
    mem.get('transfer_' + id).then(function (value) {
        if(value){
            value = JSON.parse(value)
            if(value.back_urls&&value.back_urls.length){
                let link = value.back_urls[index];
                if(value.back_urls.length>index+1){
                    let back = req.protocol+'://'+req.hostname+'/transfer/back/'+value.id+'?index='+(index+1)
                    back = encodeURIComponent(back)
                    if(link.indexOf('?')!=-1){
                        link+='&back='+back
                    }else{
                        link+='?back='+back
                    }
                }
                console.log(link)
                res.redirect(link)
            }else{
                res.send('没有返回链接')
            }
        }else {
            TransferModel.find({id: id}, function (err, data) {
                if (data && data[0]&& data[0].links) {
                    var value = data[0];
                    mem.set('transfer_' + req.params.id, JSON.stringify(value), 1*60).then(function () {
                        //console.log('---------set transfer value---------')
                    })
                    
                    if(value.back_urls&&value.back_urls.length){
                        let link = value.back_urls[index];
                        if(value.back_urls.length>index+1){
                            let back = req.protocol+'://'+req.hostname+'/transfer/back/'+value.id+'?index='+(index+1)
                            back = encodeURIComponent(back)
                            if(link.indexOf('?')!=-1){
                                link+='&back='+back
                            }else{
                                link+='?back='+back
                            }
                        }
                        console.log(link)
                        res.redirect(link)
                    }else{
                        res.send('没有返回链接')
                    }
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
