//here we add all the middleware and
console.log("hello from server")

const mongoose = require('mongoose')
require('dotenv').config({ path: './.env' }); //this is for loading and using the .env file with the process.env command
const app = require('./index');

const DB = process.env.MONGO_CONNECTION_URL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection successful!'))
  .catch((err) => console.log('Error in connection to DB: ', err));


mongoose.set("useFindAndModify", false); //This line makes sure that we don't get any warning in the console

const port = 8000;

app.listen(port, () => {
  console.log("App running on port Number : "+port);
});
