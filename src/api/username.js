import AsyncStorage from '@react-native-async-storage/async-storage'

export const setUsernameApi = async ( username ) => {
    try {
        await AsyncStorage.setItem( 'username', username );
        return true;
    } catch (error) {
        return null
    }
}

export const getUsernameApi = async () => {
    try {
        const username = await AsyncStorage.getItem( 'username' )
        return username;
    } catch (error) {
        return null
    }
}
