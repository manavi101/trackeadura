const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.DB_MONGODB,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true });

//Production only
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

//ROUTERS
const weaponsRouter = require('./routes/weapons');
const usersRouter = require('./routes/users');
app.use('/api', weaponsRouter);
app.use('/api', usersRouter);

app.use((req, res, next) => {
  const error = new HttpError('No se ha podido encontrar la ruta.', 404)
  throw error;
});

app.use((error, req, res, next) => {
  if(res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || 'Ha ocurrido un error inesperado.'});
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});