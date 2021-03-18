const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  userName: {
    type: String
  },
  contact: {
    type: Number
  },
  password: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  code: {
    type: String
  }
  
  });
  
  module.exports = mongoose.model('userreg', PostSchema  );