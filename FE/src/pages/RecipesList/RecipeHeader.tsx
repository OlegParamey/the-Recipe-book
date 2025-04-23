import { useSearchParams } from "react-router-dom";

function RecipeHeader() {
	const [searchParams] = useSearchParams();

	const ingredient = searchParams.get("ingredient");
	const country = searchParams.get("country");
	const category = searchParams.get("category");
	const search = searchParams.get("search");

	let pageTitle = "All Recipes";

	if (country) {
		pageTitle = `${country} Recipes`;
	} else if (ingredient) {
		pageTitle = `Recipes with ${ingredient}`;
	} else if (category) {
		pageTitle = `Recipes in ${category} category`;
	} else if (search) {
		pageTitle = `Recipes matching "${search}"`;
	}
	return (
		<div className="text-center p-6">
			<h1 className="font-mono text-4xl">{pageTitle}</h1>
		</div>
	);
}

export default RecipeHeader;
