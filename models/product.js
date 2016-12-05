/**
 * Created by diogo on 21/11/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: { type: String, required:true},
    description : {type: String},
    price : {type: String, required:true},
    urlImage : {type:String}
});

module.exports = mongoose.model('Product',productSchema);