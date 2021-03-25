const express = require("express");

var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const users = ["rahim", "karim", "mofij", "sabit", "rayhan"];
app.get("/", (req, res) => {
  res.send("I am from 3000");
});
app.get("/personalInfo/solayman", (req, res) => {
  res.send({ name: "solayman", address: "Dhaka" });
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

//post

app.post("/addUser", (req, res) => {
  const userInfo = req.body;
  userInfo.id = 55;
  res.send(userInfo);
});

app.listen(3000, () => console.log("3000 is running"));
