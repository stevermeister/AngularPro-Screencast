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
    res.status(200).send("OK");
});
// app.get("/sendpush", (_, res)  => {
//     const pushSubscription = JSON.parse(fs.readFileSync("subscription.json"));
//     console.log(pushSubscription);
//     sendNotification(pushSubscription)
//     res.status(200).send("message has been sent");
// });


app.listen(3000, "0.0.0.0");

