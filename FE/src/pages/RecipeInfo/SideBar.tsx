import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipes } from "../../services/api";

interface SideBarProps {
	category: string;
}

interface Meal {
	strMeal: string;
	strMealThumb: string;
	idMeal: string;
}

function SideBar({ category }: SideBarProps) {
	const [recipes, setRecipes] = useState<Meal[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getRecipes({ category });
				setRecipes(response.meals || []);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [category]);

	return (
		<div className="w-3/7 flex flex-col p-4 mr-2 gap-y-2 h-full bg-white rounded-2xl shadow-2xl overflow-hidden">
			<h1 className="text-center font-mono font-black text-sm border border-stone-800/40 sm:text-xl bg-stone-100 rounded-2xl py-2 shadow-lg">
				{category} Recipes
			</h1>
			<div className="flex flex-col gap-y-1 max-h-screen overflow-auto">
				{recipes.length > 0 &&
					recipes.map((meal) => <OneRecipe meal={meal} key={meal.idMeal} />)}
			</div>
		</div>
	);
}

interface OneRecipeProps {
	meal: Meal;
}

function OneRecipe({ meal }: OneRecipeProps) {
	const navigate = useNavigate();

	return (
		<div
			className="bg-white rounded-2xl flex justify-start items-center border-2
       border-neutral-200 active:border-stone-800 shadow-md hover:bg-neutral-200"
			onClick={() => navigate(`/recipe/${meal.idMeal}`)}
		>
			<img
				src={meal.strMealThumb}
				className="max-w-14 sm:max-w-20 m-1 border-stone-700 rounded-xl"
				alt={meal.strMeal}
			/>
			<h2 className="w-full text-center p-1 text-xs sm:text-lg font-mono font-bold text-black">
				{meal.strMeal}
			</h2>
		</div>
	);
}

export default SideBar;
