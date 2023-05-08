import axios from 'axios';

axios.defaults.baseURL = 'https://yummy-rest-api.onrender.com/';

export const addIngredient = async (data) => {
    const response = await axios.post('/ingredients/shopping-list', data); 
    return response;
};

export const getShoppingList = async () => {
    const response = await axios.get(`/ingredients/shopping-list`); 
    return response;
};

export const deleteIngredientInShoppingList = async ingredientId => {
    const response = await axios.delete(`/ingredients/shopping-list/${ingredientId}`); 
    return response.data;
}

export const deleteAllShoppingList = async () => {
    const response = await axios.delete('ingredients/shopping-list');
    return response.data;
}