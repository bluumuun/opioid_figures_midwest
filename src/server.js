import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI,
 {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});