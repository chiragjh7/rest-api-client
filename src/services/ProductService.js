import Category from "../models/Category.js";
import Product from "../models/Product.js";

// Service for Creating Product
export const CreateProduct = async (
  productName,
  qtyPerUnit,
  unitPrice,
  unitsInStock,
  discontinued,
  categoryName
) => {
  let categoryId;
  if (categoryName) {
    try {
      const category = new Category({ categoryName });
      const newCategory = await category.save();
      categoryId = newCategory._id;
    } catch (err) {
      throw new Error("Error creating category");
    }
  }
  const product = new Product({
    productName,
    qtyPerUnit,
    unitPrice,
    unitsInStock,
    discontinued,
    categoryId,
  });
  await product.save();
  return product;
};

// Service for Querying List of Products
export const QueryListOfProducts = async () => {
  return Product.find().populate("categoryId", 'categoryName').select('-__v');
};

// Service for Querying Product by Id
export const QueryProductById = async (id) => {
  return Product.findById(id).populate("categoryId", 'categoryName').select('-__v');
}

// Service for Updating Product by Id
export const UpdateProductById = async (id, productName, qtyPerUnit, unitPrice, unitsInStock, discontinued, categoryName) => {
  try {
    let categoryId;
    if (categoryName) {
      try {
        const category = new Category({ categoryName });
        const newCategory = await category.save();
        categoryId = newCategory._id;
      } catch (err) {
        throw new Error("Error creating category");
      }
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      { 
        productName: productName,
        qtyPerUnit: qtyPerUnit,
        unitPrice: unitPrice,
        unitsInStock: unitsInStock,
        discontinued: discontinued,
        categoryId: categoryId,
      },
      { new: true }
    ).populate('categoryId', 'categoryName');
    return updatedProduct;
  } catch (error) {
    throw error;
  }
}

// Service for Deleting Product by Id
export const DeleteProductById = async (id) => {
  try {
    const product = await Product.findByIdAndDelete(id);
    return product;
  } catch (error) {
    throw error;
  }
}