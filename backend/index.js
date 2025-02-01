const express = require('express');

const app = express();

require('dotenv').config();
var cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(
    cors({
      origin: "*",
    })
  );

const routes = require('./routes/litsocRoutes');
app.use('/api/v1', routes);

const connectWithDb = () => require('./config/database');
connectWithDb();

app.listen(PORT, () => {
    console.log('server started at port ' + PORT);
});


app.get('/api/v1', (req, res) => {
    res.send('<h1>this is my homepage</h1>');
});