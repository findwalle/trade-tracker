import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import http from 'http';
// import cors from 'cors';


const PORT = 8080;
//------------------------------------------------------------------------------------------------------------//
// Router & DB imports
const generalRouter = require('./routes/generalRouter')


//------------------------------------------------------------------------------------------------------------//
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//------------------------------------------------------------------------------------------------------------//
// Routers & endpoints
// Static serve on / endpoint on app load
app.use('/', generalRouter);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});
//------------------------------------------------------------------------------------------------------------//
// oAuth setup


//------------------------------------------------------------------------------------------------------------//
// catch-all router handler for any requests to an unknown endpoint
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  
  console.log(errorObj);

  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${port}`)
})

module.exports = app;