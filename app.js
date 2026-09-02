
require('dotenv').config();

const express = require('express');
const path = require('path');
const weatherRoutes = require('./routes/weather');


const app = express();

// TODO: render.com provides the PORT and HOST environment variables,
// so we need to use those instead of hardcoding them
// const PORT = process.env.PORT || 10000;
// const HOST = process.env.HOST || '0.0.0.0';

//  TODO: For local development, you can uncomment the lines
//  below and comment out the lines above
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';


// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, Client JS)
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/', weatherRoutes);



app.listen(PORT, HOST, () => 
      //deployed on render.com, so we need to log the URL instead of just the port
      //console.log(`Server running at: ${PORT}`);
      console.log(`Server running on http://${HOST}:${PORT}`)
);

