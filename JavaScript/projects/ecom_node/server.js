const express = require('express');
const cors = require('cors');
const app = express();
const database = require('mongoose');
const UserRoutes = require('./routes/user-routes')

app.use(cors());

app.use(express.json());

// database configuration

const DBURL = 'mongodb://127.0.0.1:27017'

database.connect(DBURL, {
    dbName: "YOURMARKETPLACE",
})
    .then(() => console.log('DATABASE CONNECTED SUCCESSFULLY'))



app.use('/api/user', UserRoutes);



// listening to the server 

app.listen(5000, () => {
    console.log("server started");
})