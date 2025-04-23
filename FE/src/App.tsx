import { Routes, Route } from "react-router-dom";
import RecipesMain from "./pages/RecipesList/RecipesMain";
import RecipeInfo from "./pages/RecipeInfo/RecipeInfo";

function App() {
	return (
		<Routes>
			<Route path="/" element={<RecipesMain />} />
			<Route path="/recipes" element={<RecipesMain />} />
			<Route path="/recipe/:id" element={<RecipeInfo />} />
		</Routes>
	);
}

export default App;
