const books = [
	{
		id: 1,
		title: "Book 1",
		description: "Book 1 description",
	},
	{
		id: 2,
		title: "Book 2",
		description: "Book 2 description",
	},
	{
		id: 3,
		title: "Book 3",
		description: "Book 3 description",
	},
];

export const booksService = {
	getBooks: () => {
		return books;
	},

	getBook: (id) => {
		return books.find((book) => book.id === id);
	},

	createBook: (body) => {
		const book = {
			id: books.length + 1,
			...body,
		};
		books.push(book);

		return book;
	},

	updateBook: (id, body) => {
		const book = books.find((book) => book.id === id);

		book.title = body.title;
		book.description = body.description;

		return book;
	},

	deleteBook: (id) => {
		const index = books.findIndex((book) => book.id === id);
		books.splice(index, 1);
	},
};
