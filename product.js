const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.error(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Mountain Bike",
  price: 599,
});
bike
  .save()
  .then((data) => {
    console.log(`worked`);
  })
  .catch((err) => {
    console.error(err);
  });
