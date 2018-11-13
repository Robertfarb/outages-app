const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/api/users');
const outages = require('./routes/api/outages');
const cors = require('cors');

// Initialize express app
const app = express();

app.use(cors());

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mlab MongoDB
mongoose.connect(db)
  .then(console.log("mongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  // Route to the root of the application
  res.send('Hello, this is the root of my Outages Application :)');
});

// Passport middleware initilization
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/outages', outages);

// Start App on Localhost:5000
const port = process.env.PORT || 8000;

app.listen(port, console.log(`Server is running on port ${port}`));
