import mongoose from "mongoose";
const schema = mongoose.Schema;

// Product Schema
const productSchema = new schema({
  productId: { type: schema.Types.ObjectId, auto: true},
  productName: { type: String, required: true },
  qtyPerUnit: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  unitsInStock: { type: Number, required: true },
  discontinued: { type: Boolean, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
