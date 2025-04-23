import { useNavigate } from "react-router-dom";

type CardData = {
	recipe: Record<string, string>;
	key: number;
};

function RecipeCard({ recipe }: CardData) {
	const navigate = useNavigate();
	return (
		<div
			className="bg-white h-70 flex flex-col justify-between items-center rounded-lg shadow-md 
      border-2 duration-150 ease-in-out border-rose-200 hover:border-rose-600 hover:scale-101
      active:scale-95 active:border-4"
			onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
		>
			<h2 className="text-center p-1 text-lg font-mono font-bold text-black">
				{recipe.strMeal}
			</h2>
			<img
				src={recipe.strMealThumb}
				className="max-w-40 rounded-2xl shadow-md mb-4"
			/>
		</div>
	);
}

export default RecipeCard;
