const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(
    "mongodb+srv://appun123:Appun123@cluster0.hsgcv73.mongodb.net/food-recipe?retryWrites=true&w=majority&appName=Cluster0"
  );
}

app.get("/", (req, res) => {
  res.send("Srrver wrkinh");
});

main()
  .then(() => console.log("Mongo connectedd"))
  .catch((err) => console.log(err));

const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoutes = require("./src/routes/categoryRoute");

app.use("/api", ItemRoutes);
app.use("/api", CategoryRoutes);

app.listen(port, () => {
  console.log("serve working on port- " + `${port}`);
});
