import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("./dist"));
app.use("/api,", router);



connect() 
    .then(() => {
        app.listen(process.env.PORT, error => {
            if (error) return console.log(error);
            console.log("server started!");
        })
    })
    .catch(console.log)