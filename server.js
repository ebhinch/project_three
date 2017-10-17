require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const UsersController = require('./routes/UsersController')
const VineyardsController = require("./routes/VineyardsController")
const WinesController = require("./routes/WinesController")

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); 


const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/build/'));

// Add Controllers after Middleware
app.use('/api/users', UsersController)
app.use("/api/vineyards", VineyardsController)
// app.use("/api/vineyards/:vineyardId", WineController)

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/client/build/index.html')
  })

app.get('/', (request,response) => {
  response.send('Hello world!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})