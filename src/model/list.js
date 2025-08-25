const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  uploadFile: {
    type: String,
  },
  filePath: {
    type: String
  }
}, { timestamps: true });

const List = mongoose.model('List', listSchema);
module.exports = { List }