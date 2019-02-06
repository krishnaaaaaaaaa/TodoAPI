const mongoose = require ('mongoose');

mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true });

module.exports = {mongoose};
