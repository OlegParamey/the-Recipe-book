import express from "express";
import recipesRouter from "./routes/recipes";
import cors from "cors";
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

// подключаем маршруты для рецептов
app.use("/recipes", recipesRouter);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
