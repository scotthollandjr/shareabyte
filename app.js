var express = require('express');
var app = express();
var routes = require('./routes/index');

app.use('/', routes);
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

var server = app.listen(app.get('port'), function () {
  console.log('server started');
});
