import mongoose from 'mongoose';
const schema = mongoose.Schema;

// Category Schema
const categorySchema = new schema({
    _id: {type: schema.Types.ObjectId, auto: true},
    categoryName: {type: String},
})
const Category = mongoose.model('Category', categorySchema);

export default Category;
