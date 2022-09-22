const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const FriendModel = require("./models/Friends");

app.use(cors());
app.use(express.json());


mongoose.connect(
    "mongodb+srv://jinx71:Qd7HWvbyyNSSHzgB@cluster0.o8h5glw.mongodb.net/test",
    { useNewUrlParser: true }
);
app.post("/addfriend", async (req, res) => {
    const friend = new FriendModel({ name: req.body.name, age: req.body.age });
    console.log(req.body);
    await friend.save();
});

app.get("/read", async (req, res) => {
    FriendModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("You are connected.")
});