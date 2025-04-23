import { useNavigate } from "react-router-dom";

function RecipeFilter() {
	const navigate = useNavigate();

	const applyFilter = (
		filterType: "ingredient" | "country" | "category" | "search",
		value: string
	) => {
		const params = new URLSearchParams();
		params.set(filterType, value);
		navigate({ pathname: "/recipes", search: params.toString() });
	};

	return (
		<div className="w-full bg-amber-300 p-2 text-center flex justify-around">
			<h1>Filter:</h1>
			<button onClick={() => applyFilter("country", "canadian")}>Canadian</button>
			<button onClick={() => applyFilter("ingredient", "chicken")}>Chicken</button>
			<button onClick={() => applyFilter("category", "seafood")}>Seafood</button>
		</div>
	);
}

export default RecipeFilter;
