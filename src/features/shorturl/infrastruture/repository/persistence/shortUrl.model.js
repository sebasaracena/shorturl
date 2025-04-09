const mongoose= require('mongoose');


const shortUrlSchema= new mongoose.Schema({
    shortUrlCode: { type: String, required: true, unique: true },
    dteId: { type: String, required: true },
    originalUrl: { type: String, required: true },
    expirationDate: { type: Date, required: true },
    maxUses: { type: Number, default: 2 },
    accessCount:{type:Number,default:0}
});
const shortUrlModel= mongoose.model('ShortUrl', shortUrlSchema, 'shorturl');
module.exports = shortUrlModel;