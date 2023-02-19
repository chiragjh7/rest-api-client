// Controller for Product Route
import { QueryListOfProducts, CreateProduct, QueryProductById, UpdateProductById, DeleteProductById } from "../services/ProductService.js";

// Create a new product in the database
export const createProduct = async (req, res) => {
  const { productName, qtyPerUnit, unitPrice, unitsInStock, discontinued, categoryName } = req.body;
  try {
    const product = await CreateProduct(
      productName,
      qtyPerUnit,
      unitPrice,
      unitsInStock,
      discontinued,
      categoryName
    );

    res.status(201).json({message: 'Product created successfully', product: product});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get all products from the database
export const getAllProduct = async (req, res) => {
  try {
    const products = await QueryListOfProducts();
    res.status(200).json({products: products});
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a product by id from the database
export const getProduct = async (req, res) => {
  
  try{
    const product = await QueryProductById(req.params.id)
    res.status(200).json({product: product})
  } catch(err){
    res.status(500).json({message: "Internal Server Error"})
  }  
}

// Update a product by id in the database
export const updateProduct = async (req, res) => {
  const { productName, qtyPerUnit, unitPrice, unitsInStock, discontinued, categoryName } = req.body;
  try {
    const product = await UpdateProductById(
      req.params.id,
      productName,
      qtyPerUnit,
      unitPrice,
      unitsInStock,
      discontinued,
      categoryName
    );

    res.status(201).json({message: 'Product updated successfully', product: product});
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Internal Server Error'});
  }
}

// Delete a product by id in the database
export const DeleteProduct = async (req, res) => {
  try{
    await DeleteProductById(req.params.id)
    res.status(200).json({message: "Product deleted successfully"})
  } catch(err){
    console.log(err);
    res.status(500).json({message: "Internal Server Error"})
  }
}