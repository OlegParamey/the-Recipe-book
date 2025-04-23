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
		<div className="w-3/7 flex flex-col p-4 mb-4 mr-2 gap-y-2 bg-white rounded-2xl shadow-2xl">
			{recipes.length > 0 &&
				recipes.map((meal) => <OneRecipe meal={meal} key={meal.idMeal} />)}
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
       border-neutral-200 active:border-rose-500 shadow-md hover:bg-neutral-200"
			onClick={() => navigate(`/recipe/${meal.idMeal}`)}
		>
			<img
				src={meal.strMealThumb}
				className="max-w-20 rounded-2xl"
				alt={meal.strMeal}
			/>
			<h2 className="text-center p-1 text-lg font-mono font-bold text-black">
				{meal.strMeal}
			</h2>
		</div>
	);
}

export default SideBar;
