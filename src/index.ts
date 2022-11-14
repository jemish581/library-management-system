import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/index";

const app = express();
const port: Number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.listen(port, () => {
  console.log(`🚀 server was running  ▄︻̷̿┻̿═━一 http://localhost:${port}`);
});

mongoose.set("debug", true);
mongoose
  .connect(
    "mongodb+srv://jemish0581:Shivay99@cluster0.5ijjgyt.mongodb.net/Books?retryWrites=true&w=majority"
  )
  .then(() => {
    console.warn("Database is connected successfully ( ͡ᵔ ͜ʖ ͡ᵔ )");
  });
