
import { API_URL } from '../utils/constants'

export const getBooksByUserApi = async (auth) => {    
    try {
        const url = `${ API_URL }/user/${ auth.idUser }/book`
        const request = await fetch(url);
        const result = request.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}