import { Link } from "react-router-dom";
import Recipe from "./Recipe";
import SideBar from "./SideBar";

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

function RecipePage({ recipe }: RecipeProps) {
	console.log(recipe.strCategory);
	return (
		<>
			<div className="bg-neutral-100">
				<div className="text-center m-5 bg-white shadow-lg rounded-2xl p-2">
					<h2 className="text-3xl  font-bold">{recipe.strMeal}</h2>
					<p className="hover:underline text-blue-900">
						<Link to={`../../recipes?country=${recipe.strArea}`}>
							<strong>Country:</strong> {recipe.strArea}
						</Link>
					</p>
				</div>
				<div className="flex justify-around">
					<Recipe recipe={recipe} />
					<SideBar category={recipe.strCategory} />
				</div>
			</div>
		</>
	);
}

export default RecipePage;
