import {useEffect, useState} from "react";
import axios from "axios";

const useWeatherData = () => {

    const city = 'tbilisi'
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=KKAWQKTTEDXDU64QERGN3PJKV&contentType=json`;
    const [weatherData, setWeatherData] = useState([])
    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(apiUrl)
            setWeatherData(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            console.log('set loading false')
        }
    }
    useEffect(() => {
        fetchWeatherData()
    }, []);

    return {weatherData, fetchWeatherData}
}
export default useWeatherData;