import axios from "axios"

const getExchangeRates = async () => {
    try {
        return await axios.get(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_RATES_API_KEY}/latest/USD`)
    } catch (error) {
        console.error(error)
    }
}

export {
    getExchangeRates,
}