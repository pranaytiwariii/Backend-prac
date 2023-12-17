import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`serving at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("db connection failed index.js!!",err);
})

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
