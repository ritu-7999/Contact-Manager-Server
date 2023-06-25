//import express for creating server
import express from "express";
import connectDB from "./config/database.js";
import router from "./router/index.js";
import cors from "cors";
//create an instance of express()
const app = express();
app.get("/", (req, res) => {
    res.send("Hi,I am server");
})
/* app.get("/ritu", (req, res) => {
    res.send("Hi,I am Ritu");
}) */
//to sharing resources between frontend and backend
app.use(cors())
//to accept json data
app.use(express.json());
connectDB();
//registered the route
app.use("/", router);
app.listen(9000, () => {
    console.log("Server is running on PORT 9000");
})