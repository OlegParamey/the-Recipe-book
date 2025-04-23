import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../services/api";
import Recipe from "./RecipePage";

function RecipeInfo() {
	const { id } = useParams<{ id: string }>();
	const [recipe, setRecipe] = useState();

	useEffect(() => {
		if (!id) return;
		const fetchData = async () => {
			try {
				const response = await getRecipeById(id);
				setRecipe(response.meals[0]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [id]);

	return <div className="flex flex-col">{recipe && <Recipe recipe={recipe} />}</div>;
}

export default RecipeInfo;
