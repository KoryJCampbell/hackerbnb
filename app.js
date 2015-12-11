var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var hbs          = require("hbs");
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var complimentsController = require("./controllers/calendarController");


// mongoose.connect('mongodb://localhost/app.js');

app.engine('html', require('ejs').renderFile);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'hbs');
app.set("views","./views");
app.use(express.static(__dirname + '/public'));


app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

app.get('/init', function(req, res){
    db.event.insert({
        text:"My test event A",
        start_date: new Date(2013,8,1),
        end_date:   new Date(2013,8,5)
    });
    db.event.insert({
        text:"One more test event",
        start_date: new Date(2013,8,3),
        end_date:   new Date(2013,8,8),
        color: "#DD8616"
    });

    /*... skipping similar code for other test events...*/

    res.send("Test events were added to the database")
});


app.get('/data', function(req, res){
    db.event.find().toArray(function(err, data){
        //set id property for all records
        for (var i = 0; i < data.length; i++)
            data[i].id = data[i]._id;

        //output response
        res.send(data);
    });
});

require('./config/passport')(passport);

var routes = require('./config/routes');
app.use(routes);

app.listen(process.env.PORT || 3000);
