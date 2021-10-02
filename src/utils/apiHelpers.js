import axios from "axios"

//export const BASE_URL = "http://localhost:5000"
export const BASE_URL ="http://20.79.216.120"

export const postApi = async (url, body, config = {}) => {

    try {
        let result = await axios.post(`${BASE_URL}/${url}`, body, config);
        return result.data;
    } catch (error) {
        console.log("POST ERROR", error.message)
    }
}

export const removeApi = async (url, config = {}) => {

    try {
        let result = await axios.delete(`${BASE_URL}/${url}`, config);
        return result.data;
    } catch (error) {
        console.log("DELETE ERROR", error.message)
    }
}

export const updateApi = async (url, body, config = {}) => {
    try {
        let result = await axios.put(`${BASE_URL}/${url}`, body, config);
        return result.data;
    } catch (error) {
        console.log("PUT ERROR", error.message)
    }
}
export const getApi = async (url, config = {}) => {

    try {
        let result = await axios.get(`${BASE_URL}/${url}`, config);
        return result.data;
    } catch (error) {
        console.log("GET ERROR", error.message)
    }
}