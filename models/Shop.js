/**
 * Created by diogo on 28/11/2016.
 */
/**
 * Created by diogo on 21/11/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    title: { type: String, required:true},
    description : {type: String},
    price : {type: String, required:true},
    urlImage : {type:String},
    email    : { type: String, required:true }
});

module.exports = mongoose.model('Shop',shopSchema);