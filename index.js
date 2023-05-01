const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const chefData = require("./data/chef.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("The Pasta People  Server!");
});

app.get("/chefdata", (req, res) => {
  res.send(chefData);
});

app.get("/chefdata/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefData.find((d) => d.chef_id == id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
