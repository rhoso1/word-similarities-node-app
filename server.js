import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import wordPairRoutes from "./app/routes/word-pair.routes.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration
var corsOptions = {
  origin: [
    "http://localhost:4200",
    "http://localhost:8080",
    "https://rhoso1.github.io/word-similarities-angular-app",
  ],
};

app.use(cors(corsOptions));

// Routes
app.use("/api/wordpairs", wordPairRoutes);

// Welcome message
app.get("/", (req, res) => {
  res.send("Welcome to the Word Similarities API");
});

// Disabling favicon icon
app.get("/favicon.ico", (req, res) => res.status(204));

// Port configuration
const PORT = process.env.PORT || 8080;

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
