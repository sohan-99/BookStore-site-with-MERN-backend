import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();


const PORT = process.env.PORT || 4002;
const URI = process.env.MongoDBURI;

async function connectToMongoDB() {
  try {
    await mongoose.connect(URI);
    // console.log("Connected to MongoDB");
  } catch (error) {
    // console.error("Error connecting to MongoDB: ", error);
  }
}

connectToMongoDB();

app.get("/", (req, res) => {
  res.send("Connected to MongoDB!");
});

// Route definitions
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});