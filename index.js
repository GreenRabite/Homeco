const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
const passportConfig = require("./services/passport");
const authRoutes = require('./routes/auth_routes');

mongoose.connect(keys.mongoURI);

// router handler
const app = express();

authRoutes(app);

// instruct Node to listen to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
