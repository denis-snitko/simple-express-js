import { Router } from "express";
import booksModule from "./books.module.js";

const router = Router();

router.get("/", (req, res) => {
	res.json({ results: booksModule.service.getBooks() });
});

router.get("/:id", (req, res) => {
	const id = Number(req.params.id);

	if (!booksModule.service.getBook(id)) {
		res.status(404).json({ error: "Book not found" });
		return;
	}

	res.json({ results: booksModule.service.getBook(id) });
});

router.post("/", (req, res) => {
	const { title, description, ...rest } = req.body;

	if (!req.body) {
		res.status(400).json({ error: "Missing body" });
		return;
	}

	if (!title || !description) {
		res.status(400).json({ error: "Missing body" });
		return;
	}

	if (Object.keys(rest).length > 0) {
		res
			.status(400)
			.json({ error: "Unknown fields: " + Object.keys(rest).join(", ") });
		return;
	}

	const book = booksModule.service.createBook({ title, description });
	res.status(201).json({ results: book });
});

router.put("/:id", (req, res) => {
	const id = Number(req.params.id);
	const { title, description, ...rest } = req.body;

	if (!booksModule.service.getBook(id)) {
		res.status(404).json({ error: "Book not found" });
		return;
	}

	if (Object.keys(rest).length > 0) {
		res
			.status(400)
			.json({ error: "Unknown fields: " + Object.keys(rest).join(", ") });
		return;
	}

	if (!title || !description) {
		res.status(400).json({ error: "Missing body" });
		return;
	}

	const book = booksModule.service.updateBook(id, { title, description });
	res.json({ results: book });
});

router.delete("/:id", (req, res) => {
	const id = Number(req.params.id);

	if (!booksModule.service.getBook(id)) {
		res.status(404).json({ error: "Book not found" });
		return;
	}

	booksModule.service.deleteBook(id);
	res.status(204).end();
});

export { router as booksController };
