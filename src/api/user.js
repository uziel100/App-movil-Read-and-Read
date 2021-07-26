import { API_URL, TOKEN } from "../utils/constants";

export const loginApi = async (formData) => {
    try {
        const url = `${API_URL}/movil/login`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        return await response.json();
    } catch (error) {
        return null;
    }
};

export const loginWithGoogleApi = async (formData) => {
    try {
        const url = `${API_URL}/movil/google`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        return await response.json();
    } catch (error) {
        return null;
    }
};

export const getMeApi = async (auth) => {
    try {
        const url = `${API_URL}/user/${auth.idUser}`;
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

export const updateUserApi = async (auth, formData) => {
    try {
        const url = `${API_URL}/user/${auth.idUser}`;
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "token": `Bearer ${auth.token}`,
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getUsernameApi = async (auth) => {
    try {
        const url = `${API_URL}/user/username/${auth.idUser}`;
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

export const updateUsernameApi = async (auth, formData) => {
    try {
        const url = `${API_URL}/user/username/${auth.idUser}`;
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "token": `Bearer ${auth.token}`,
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
