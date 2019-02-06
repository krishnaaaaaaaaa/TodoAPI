var mongoose = require('mongoose');

var user = mongoose.model('user',{
  username:{
      type: String,
      required: true,
      minlength: 1,
      trim: true
  },
  password:{
    type: String,
    default: '12345678'
  }
});

module.exports = {user};
