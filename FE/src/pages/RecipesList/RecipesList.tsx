import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { getRecipes } from "../../services/api";

function RecipesList() {
	const [searchParams] = useSearchParams();
	const [recipes, setRecipes] = useState([]);
	const currentFilter = useMemo(() => {
		const filter: Record<string, string> = {};

		if (searchParams.get("country")) {
			filter.country = searchParams.get("country")!;
		}
		if (searchParams.get("ingredient")) {
			filter.ingredient = searchParams.get("ingredient")!;
		}
		if (searchParams.get("category")) {
			filter.category = searchParams.get("category")!;
		}
		if (searchParams.get("search")) {
			filter.search = searchParams.get("search")!;
		}

		return Object.keys(filter).length > 0 ? filter : undefined;
	}, [searchParams]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getRecipes(currentFilter);
				setRecipes(response.meals || []);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [recipes.length, currentFilter]);

	return (
		<div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] gap-5 px-4 py-2">
			{recipes.length > 0 ? (
				recipes.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)
			) : (
				<div>No such a meal</div>
			)}
		</div>
	);
}

export default RecipesList;
