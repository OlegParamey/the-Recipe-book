import RecipeHeader from "./RecipeHeader";
import RecipeFilter from "./RecipeFilter/RecipeFilter";
import RecipesList from "./RecipesList";

function RecipesMain() {
	return (
		<div className="w-full h-full inset-0 bg-neutral-100">
			<RecipeHeader />
			<RecipeFilter />
			<RecipesList />
		</div>
	);
}

export default RecipesMain;
