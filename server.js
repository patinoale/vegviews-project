const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override'); 
const port = process.env.PORT || 3000; 

require('dotenv').config();

const app = express();

require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const reviewsRouter = require('./routes/reviews');
const commentsRouter = require('./routes/comments');

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json()); /////////////
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "HowdyFriends!",
    resave: false,
    saveUninitialized: true
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/reviews', reviewsRouter);
app.use('/', commentsRouter);

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});