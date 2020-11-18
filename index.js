const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const user = require('./routes/users');
const express = require('express');
const app = express();
const url = "mongodb://35.247.16.184:27017/project2";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected..."))
    .catch(err => console.error("Something went wrong", err));

app.use(express.json());
app.use('/users', user);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}...`));


// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://35.247.16.184:27017/"
// const testUser = "user2";

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err;
//     console.log("Connected...");
//     let dbo = db.db("project2");
//     //change to countDocuments
//     dbo.collection("user1").count({ username: 'testUser' })
//     .then( (count) => {
//         (count > 0)? console.log("Username already exists.") : console.log("Username does not exist.")
//     });

// dbo.listCollections().toArray( (err, items) => {
//     if(err) throw err;
//     console.log(items);
//     if(items.indexOf(testUser) === -1) console.log("No user found.");
// });
// dbo.collection("user1").find({}, {projection: {_id:0}}).toArray( (err, res) => {
//     if(err) throw err;
//     console.log(res);
//     db.close();
// });