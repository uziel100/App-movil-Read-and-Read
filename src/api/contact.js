import { API_URL } from "../utils/constants";

export async function setContactApi(auth, formData) {
  try {
    const url = `${API_URL}/feedback`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
