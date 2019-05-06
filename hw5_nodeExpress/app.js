let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let app = express();

//setup oauth
let passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('./config/config');
const User = require('./database/db');

passport.use(
    new GoogleStrategy({
          callbackURL: '/auth/google/redirect',
          clientID: config.google.clientID,
          clientSecret: config.google.clientSecret
        }, (token, refreshToken, profile, done) => {
          User.findOne({'id': profile.id},
              function(err, user) {
                if (!user) {
                  user = new User({
                    id: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    favorites: []

                  })
                  user.save(function(err) {
                    if (err) console.log(err);
                    return done(err, user);
                  })
                }
                else {
                  return done(err, user);
                }
              })
        }
    )
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieSession({
    name: 'session',
    keys: ['fuh4t87yrhf'],
    maxAge: 24 * 60 * 60 * 1000
}));


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

//routes for oauth
app.get('/',
    function(req, res){
      res.render('views/query', { user: req.user });
    });


app.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
}));

app.get('/auth/google/redirect', passport.authenticate('google', {
      failureRedirect: 'views/login'}),
    (req, res) => {
      req.session.token = req.user.token;
      res.redirect('views/query');
    }
);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const hw3Router = require('./routes/hw3Router');
const loginRouter = require('./routes/login');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hw3', hw3Router);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
