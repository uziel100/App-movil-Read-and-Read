import { API_URL, TOKEN } from "../utils/constants";


export const loginApi = async ( formData ) => {
    try {
        const url = `${ API_URL }/movil/login`;
        const params = {
            method: "POST",            
            headers: {
                "Content-Type": "application/json",
            },          
            body: JSON.stringify( formData )  
        }
        const response = await fetch( url, params );
        return await response.json();        
    } catch (error) {
        return null;
    }
}

export const loginWithGoogleApi = async ( formData ) => {
    try {
        const url = `${ API_URL }/movil/google`;
        const params = {
            method: "POST",            
            headers: {
                "Content-Type": "application/json",
            },          
            body: JSON.stringify( formData )  
        }
        const response = await fetch( url, params );
        return await response.json();        
    } catch (error) {
        return null;
    }
}