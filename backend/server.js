const express = require("express");

const placeRoutes = require("./routes/places-routes");
// const userRoutes = require("./routes/users-routes");

const app = express();
const port = 5000;

app.use("/api/places",placeRoutes);
// app.use("/api/users",userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
