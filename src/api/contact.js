import AsyncStorage from "@react-native-async-storage/async-storage";

export const getContact = async (auth) => {
  try {
    const url = `${API_URL}/feedback/${auth.idUser}`;
    return contact;
  } catch (error) {
    return null;
  }
};
