var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').cms_mongodb;
var db = mongoose.createConnection(connect_url); 

var CMSTransferSchema = new Schema({
  id:String,
  title:String,
  links: Array,
  back_urls : Array,
  type : {
  	type : Number,
  	default : 0
  },
  weights : Array
});

var CMSTransferModel = db.model('Transfer', TransferSchema);

module.exports = CMSTransferModel;