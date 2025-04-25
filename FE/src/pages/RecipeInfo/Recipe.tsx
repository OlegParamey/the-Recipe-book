import { Link } from "react-router-dom";

type RecipeProps = {
	recipe: {
		idMeal: string;
		strMeal: string;
		strCategory: string;
		strArea: string;
		strInstructions: string;
		strMealThumb: string;
		strSource?: string;
		strYoutube?: string;
	} & {
		[key in `strIngredient${number}` | `strMeasure${number}`]?: string;
	};
};
function Recipe({ recipe }: RecipeProps) {
	const ingredients = [];
	for (let i = 1; i <= 20; i++) {
		const ingredient = recipe[`strIngredient${i}`];
		const measure = recipe[`strMeasure${i}`];
		if (ingredient) {
			ingredients.push(`${ingredient} - ${measure || "To taste"}`);
		}
	}
	return (
		<div className="w-3/7 flex flex-col h-fit p-4 mb-4 ml-2 bg-white rounded-2xl shadow-2xl overflow-auto">
			<div className="recipe-image">
				<img
					className="w-full  rounded-lg"
					src={recipe.strMealThumb}
					alt={recipe.strMeal}
				/>
			</div>

			<div>
				<h2 className="italic text-lg font-bold underline">Instructions:</h2>
				<p className="text-xs">{recipe.strInstructions}</p>
			</div>

			<div className="ingredients">
				<h2 className="italic text-lg font-bold underline">Ingredients:</h2>
				<ul className="flex flex-col">
					{ingredients.length > 0 ? (
						ingredients.map((ingredient, index) => (
							<li className="border-b text-xs sm:text-base" key={index}>
								<Link
									to={`../../recipes?ingredient=${
										ingredient.split(" - ")[0]
									}`}
								>
									{ingredient}
								</Link>
							</li>
						))
					) : (
						<li>No ingredients available</li>
					)}
				</ul>
			</div>
		</div>
	);
}

export default Recipe;
