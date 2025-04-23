import { Router } from "express";
import { config } from "dotenv";
import axios from "axios";

config();
const router = Router();

// Получить все рецепты или с фильтрами
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

		const response = await axios.get(apiUrl);
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
		const response = await axios.get(apiUrl);
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch recipe details" });
	}
});

export default router;
