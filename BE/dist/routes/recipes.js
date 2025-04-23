"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = require("dotenv");
const axios_1 = __importDefault(require("axios"));
(0, dotenv_1.config)();
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
	const { ingredient, country, category, search } = req.query;
	try {
		let apiUrl = "";
		if (search) {
			apiUrl = `${process.env.URL_Search}=${search}`;
		} else if (ingredient) {
			apiUrl = `${process.env.URL_Ingridient}=${ingredient}`;
		} else if (country) {
			apiUrl = `${process.env.URL_Country}=${country}`;
		} else if (category) {
			apiUrl = `${process.env.URL_Category}=${category}`;
		} else {
			apiUrl = `${process.env.URL_All}=`;
		}
		const response = await axios_1.default.get(apiUrl);
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch recipes" });
	}
});
router.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const apiUrl = `${process.env.URL_Id}=${id}`;
		const response = await axios_1.default.get(apiUrl);
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch recipe details" });
	}
});
exports.default = router;
