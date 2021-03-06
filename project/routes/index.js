var express = require('express');
var router = express.Router();
var NovelTransferModel = require('../model/NovelTransfer.js');
var mem = require('../util/mem.js')

router.get('/:randomID', function (req, res, next) {
    var id = req.params.randomID;
    mem.get('random_novel_transfer_' + id).then(function (value) {
        if (value) {
          value = JSON.parse(value)
          if (value.replaceUrl != '') {
            res.redirect(value.replaceUrl)
          } else {
            res.redirect(value.url)
          }
        }else {
          NovelTransferModel.findOne({randomID:id}, function (err, data) {
            if (data) {
              mem.set('random_novel_transfer_' + id, JSON.stringify(data), 1 * 60).then(function () {
                //console.log('---------set transfer value---------')
              })
              if (data.replaceUrl != '') {
                res.redirect(data.replaceUrl)
              } else {
                res.redirect(data.url)
              }
            } else {
              res.send('没有查询到此链接，请先创建')
            }
          })

    }
    }).catch(function (err) {
        console.log(err);
    });
})

module.exports = router;
