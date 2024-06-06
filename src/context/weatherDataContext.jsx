import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {message} from "antd";

const defaultContext = {
    city: 'tbilisi',
    weatherData: [],
    timeZone: ''
};

export const WeatherDataContext = createContext(defaultContext)

function WeatherDataProvider({children}){

    const [weatherData, setWeatherData] = useState([]);
    const [timeZone, setTimeZone] = useState('');
    const [location,setLocation] = useState('tbilisi');
    const [unitGroup, setUnitGroup] = useState('metric');

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&key=KKAWQKTTEDXDU64QERGN3PJKV&contentType=json`)
            setWeatherData(response.data)
            setTimeZone(response.data.timezone)
        } catch (error) {
            message.warning('Location not found. Please try again.');
            console.log(error)
        } finally {
            // console.log('set loading false')
        }
    }




    useEffect(() => {
        localStorage.getItem('unitGroup') || localStorage.setItem('unitGroup', 'metric')
        setUnitGroup(localStorage.getItem('unitGroup'));
        fetchWeatherData()
    }, [location,unitGroup]);

    function changeLocation(newLocation){
        setLocation(newLocation)
    }


    function changeUnitGroup() {
        const newUnitGroup = unitGroup === 'metric' ? 'us' : 'metric';
        localStorage.setItem('unitGroup', newUnitGroup);
        setUnitGroup(newUnitGroup);
    }




    return(
        <WeatherDataContext.Provider value={{weatherData,timeZone,changeLocation,changeUnitGroup,unitGroup}}>
            {children}
        </WeatherDataContext.Provider>
    )
}

export default WeatherDataProvider;