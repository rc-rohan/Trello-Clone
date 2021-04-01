//here we add all the middleware and 
console.log("hello from server")

const mongoose = require('mongoose')
const app = require('./index');


const port = 8000;

app.listen(port, () => {
  console.log("App running on port Number : "+port);
});
