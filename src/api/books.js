
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
        const result = request.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}