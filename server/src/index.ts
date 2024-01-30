import express from "express";
import cateRouter from "./routes/category.routes";
import questionRouter from "./routes/question.routes";
// import cors from "cors";
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// đường dẫn routes category
app.use("/api/v1/category",cateRouter);

// đường dẫn routes question
app.use("/api/v1/question",questionRouter);

app.listen(7750, () => {
    console.log("Server running on port 7749");
})

