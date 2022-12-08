const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      
    });
    console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`error:${error.message}`);
  }
};

module.exports=connectDB;