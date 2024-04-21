const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors')
//const sendNotification = require("./push"); 
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const fs = require('fs');

app.post("/subscription", (req, res) => {
    const pushSubscription = req.body;
    fs.writeFileSync("subscription.json", JSON.stringify(pushSubscription));
    console.log('Subscription saved');
    res.status(201).json({});
});

app.listen(3000, "0.0.0.0");

