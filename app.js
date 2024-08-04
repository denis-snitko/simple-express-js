import "dotenv/config";
import express from "express";
import { logger } from "./src/middlewares/index.js";

import booksModule from "./src/modules/books/books.module.js";

const app = express();

const PORT = process.env.PORT || 4200;

app.use(logger());
app.use(express.json());

app.use("/books", booksModule.controller);

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`, new Date().toLocaleString());
});
