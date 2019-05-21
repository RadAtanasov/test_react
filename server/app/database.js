let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test-react', {useNewUrlParser: true});

module.exports = Schema;

