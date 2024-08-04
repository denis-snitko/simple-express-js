import fs from "fs";

export const logger = () => (req, res, next) => {
	console.log(
		`${req.method}: ${req.protocol}://${req.hostname}${
			req.originalUrl
		} - ${new Date().toLocaleString()}`
	);

	const logFile = "./logs.log";
	const logText = `${req.method}: ${req.protocol}://${req.hostname}${
		req.originalUrl
	} - ${new Date().toLocaleString()}\n`;

	fs.appendFile(logFile, logText, (err) => {
		if (err) {
			console.error("Error writing to log file:", err);
		}
	});

	next();
};
