const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(
    "mongodb+srv://AAppun11:AAppun11@cluster0.hsgcv73.mongodb.net/food-recipe?retryWrites=true&w=majority&appName=Cluster0"
  );
}



main()
  .then(() => console.log("Mongo connectedd"))
  .catch((err) => console.log(err));

const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoutes = require("./src/routes/categoryRoute");

app.use("/api", ItemRoutes);
app.use("/api", CategoryRoutes);
app.get("/", (req, res) => {
  res.send("Srrver wrkinh");
});

app.listen(port, () => {
  console.log("serve working on port- " + `${port}`);
});
