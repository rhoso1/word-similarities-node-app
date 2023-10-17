import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import wordPairRoutes from "./app/routes/word-pair.routes.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: ["http://localhost:4200", "http://localhost:8080"],
};

app.use(cors(corsOptions));

app.use("/api/wordpairs", wordPairRoutes);

//Disabling favicon icon
app.get('/favicon.ico', (req, res) => res.status(204));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
