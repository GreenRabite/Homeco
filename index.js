const express = require('express');
const passportConfig = require("./services/passport");
const authRoutes = require('./routes/auth_routes');

// router handler
const app = express();

authRoutes(app);

// instruct Node to listen to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
