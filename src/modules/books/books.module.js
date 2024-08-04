import { booksController } from "./books.controller.js";
import { booksService } from "./books.service.js";

const booksModule = {
	controller: booksController,
	service: booksService,
};

export default booksModule;
