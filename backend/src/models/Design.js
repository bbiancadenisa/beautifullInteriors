const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DesignSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // userId: {
  //   type: Number,
  //   required: true
  // },
  
}, { timestamps: true });

const Design = mongoose.model('Design', DesignSchema);
module.exports = Design;