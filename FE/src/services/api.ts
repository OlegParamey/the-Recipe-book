import axios from "axios";

export const getRecipes = async (filters?: Record<string, string>) => {
	const params = new URLSearchParams(filters);
	const response = await axios.get(`/api/recipes?${params.toString()}`);
	return response.data;
};

export const getRecipeById = async (id: string) => {
	const response = await axios.get(`/api/recipes/${id}`);
	return response.data;
};
