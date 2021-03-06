
import { API_URL } from '../utils/constants'

export const getBooksByUserApi = async (auth) => {    
    try {
        const url = `${ API_URL }/user/${ auth.idUser }/book?limit=5`        
        const params = {
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
                "token": `Bearer ${ auth.token }`
            }
        }
        const request = await fetch(url, params);
        const result = await request.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getAllBooksByUserApi = async (auth) => {    
    try {
        const url = `${ API_URL }/user/${ auth.idUser }/book`        
        const params = {
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
                "token": `Bearer ${ auth.token }`
            }
        }
        const request = await fetch(url, params);
        const result = request.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getRecentlyReadBooksByUserApi = async (auth) => {    
    try {
        const url = `${ API_URL }/user-book/${ auth.idUser }/recentlyViewed`        
        const params = {
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
                "token": `Bearer ${ auth.token }`
            }
        }
        const request = await fetch(url, params);
        const result = await request.json();        
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getFavoritesBooksByUserApi = async (auth) => {    
    try {
        const url = `${API_URL}/user-favorite/${ auth.idUser }`;
        const params = {
            headers: {
                method: "GET",
                "Content-Type": "application/json",
                "token": `Bearer ${auth.token}`,
            },
        };
        const request = await fetch(url, params);
        const result = request.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const putBookInFavoriteApi = async (auth, formData) => {    
    try {
        const url = `${API_URL}/user-book/favorite`;     
        
        const params = {
            method: "PUT",
            headers: {                
                "Content-Type": "application/json",
                "token": `Bearer ${auth.token}`,
            },
            body: JSON.stringify(formData),
        };        
        const request = await fetch(url, params);        
        const result = await request.json();                
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

