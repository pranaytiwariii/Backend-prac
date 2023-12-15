import dotenv from "dotenv"
// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

// import { Express } from "express";
// const app = express()(async () => {
//   try {
//     mongoose.connect("${process.env.MONGODB_URI}/${DB_NAME}");
//     app.on("errror", (error) => {
//       console.log("ERRR:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//         console.log('listening on port ${process.env.PORT}');
//     })
//   } catch (error) {
//     console.error("ERROR:", error);
//     throw err;
//   }
// })();
