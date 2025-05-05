import axios from "axios"

export const useGet = async (url) => {
    try {
        return await axios.get(url)
    } catch (error) {
        console.error(error)
    }
}