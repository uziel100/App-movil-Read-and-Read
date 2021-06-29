import { API_URL } from "../utils/constants"


export const getWishListApi = async (auth) => {
    try {
        const url = `${ API_URL }/wishlist/user/${ auth.idUser }`
        console.log(url)
        const request = await fetch(url);
        const result = await request.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}