import mongoose from "mongoose";

// Database connection using mongoose
const DBConnect = async () => {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

export default DBConnect;
