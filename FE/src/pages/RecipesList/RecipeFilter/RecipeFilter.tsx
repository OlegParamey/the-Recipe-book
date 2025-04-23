import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeFilter() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [activeFilter, setActiveFilter] = useState<string | null>(null);
	const [filterValue, setFilterValue] = useState<string>("");

	const countries = ["canadian", "italian", "mexican", "japanese", "indian"];
	const categories = ["seafood", "dessert", "breakfast", "pork", "miscellaneous"];
	const ingredients = ["chicken", "beef", "salmon", "tomato", "rice"];

	useEffect(() => {
		for (const [key, value] of searchParams.entries()) {
			if (["ingredient", "country", "category"].includes(key)) {
				setActiveFilter(key);
				setFilterValue(value);
				break;
			}
		}
	}, [searchParams]);

	const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newFilterType = e.target.value;
		if (newFilterType === "") {
			setActiveFilter(null);
			setFilterValue("");
			navigate("/recipes");
		} else {
			setActiveFilter(newFilterType);
			setFilterValue("");
		}
	};

	const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setFilterValue(value);

		if (value && activeFilter) {
			const params = new URLSearchParams();
			params.set(activeFilter, value);
			navigate({ pathname: "/recipes", search: params.toString() });
		}
	};

	const clearFilters = () => {
		setActiveFilter(null);
		setFilterValue("");
		navigate("/recipes");
	};

	return (
		<div className="w-full bg-amber-300 p-4 flex items-center justify-center gap-4">
			<h1 className="font-bold font-mono text-rose-900">Filter Recipes:</h1>

			<div className="flex gap-4">
				<select
					value={activeFilter || ""}
					onChange={handleFilterTypeChange}
					className="p-2 rounded border bg-white border-gray-300"
				>
					<option value="">Select filter type</option>
					<option value="country">By Country</option>
					<option value="category">By Category</option>
					<option value="ingredient">By Ingredient</option>
				</select>

				{activeFilter && (
					<select
						value={filterValue}
						onChange={handleValueChange}
						className="p-2 rounded border bg-white border-gray-300"
					>
						<option value="">Select {activeFilter}</option>
						{activeFilter === "country" &&
							countries.map((country) => (
								<option key={country} value={country}>
									{country.charAt(0).toUpperCase() + country.slice(1)}
								</option>
							))}
						{activeFilter === "category" &&
							categories.map((category) => (
								<option key={category} value={category}>
									{category.charAt(0).toUpperCase() + category.slice(1)}
								</option>
							))}
						{activeFilter === "ingredient" &&
							ingredients.map((ingredient) => (
								<option key={ingredient} value={ingredient}>
									{ingredient.charAt(0).toUpperCase() +
										ingredient.slice(1)}
								</option>
							))}
					</select>
				)}

				{activeFilter && filterValue && (
					<button
						onClick={clearFilters}
						className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
					>
						Clear Filter
					</button>
				)}
			</div>
		</div>
	);
}

export default RecipeFilter;
