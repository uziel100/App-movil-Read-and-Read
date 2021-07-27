import { API_URL, TOKEN } from "../utils/constants";


export const searchBooksByUserApi = async (auth, query) => {
    try {        
        const url = `${API_URL}/search/user-book/${auth.idUser}?query=${ query }`;
        const params = {
            headers: {
                method: "GET",
                "Content-Type": "application/json",
                "token": `Bearer ${auth.token}`,
            },
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

