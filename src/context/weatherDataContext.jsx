import {createContext, useEffect, useRef, useState} from "react";
import axios from "axios";
import {message} from "antd";


const defaultContext = {
    city: 'tbilisi',
    weatherData: [],
    timeZone: ''
};

export const WeatherDataContext = createContext(defaultContext)

function WeatherDataProvider({children}) {
    const [weatherData, setWeatherData] = useState([]);
    const [timeZone, setTimeZone] = useState('');
    const [location, setLocation] = useState(localStorage.getItem('currentLocation') || 'tbilisi');
    const [unitGroup, setUnitGroup] = useState(localStorage.getItem('unitGroup') || 'metric');
    const [currentWeekDayHours, setCurrentWeekDayHours] = useState([]);
    const defaultStorage = localStorage.getItem('history');
    const [searchLocation, setSearchLocation] = useState(defaultStorage ? JSON.parse(defaultStorage) : []);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedWeekDayIndex, setSelectedWeekDayIndex] = useState(0)
    const [tabs, setTabs] = useState(1);
    const [scrollTop, setScrollTop] = useState(false);
    const swiperRef = useRef(null);

    const fetchWeatherData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&key=MVHKWF6DS5G3EFJ6Y5F9G622C&contentType=json`)
            setWeatherData(response.data);
            setTimeZone(response.data.timezone);
            updateSearchHistory(response.data);
            localStorage.setItem('currentLocation', response.data.address);
        } catch (error) {
            message.warning('Location not found. Please try again.');
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        localStorage.getItem('unitGroup') || localStorage.setItem('unitGroup', 'metric');
        fetchWeatherData()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [unitGroup, location]);

    const updateSearchHistory = (data) => {
        if (!searchLocation.some(elem => elem.address === data.address)) {
            const updatedSearchLocation = [{address: data.address}, ...searchLocation.slice(0, 7)];
            setSearchLocation(updatedSearchLocation);
            localStorage.setItem('history', JSON.stringify(updatedSearchLocation));
            scrollTopFn()
        }
        setSelectedWeekDayIndex(0)
        setTabs(1)
        scrollToFirstSlide()
    };

    function changeLocation(newLocation) {
        setLocation(newLocation);
        setSelectedWeekDayIndex(0)
        setTabs(1)
        scrollToFirstSlide()
        fetchWeatherData();
    }

    function deleteLocation(i) {
        setSearchLocation(prev => {
            const updatedSearchLocation = prev.filter((_, index) => index !== i);
            localStorage.setItem('history', JSON.stringify(updatedSearchLocation));
            return updatedSearchLocation;
        });
    }

    function changeUnitGroup() {
        const newUnitGroup = unitGroup === 'metric' ? 'us' : 'metric';
        setUnitGroup(newUnitGroup);
        localStorage.setItem('unitGroup', newUnitGroup);
        setSelectedWeekDayIndex(0)
        setTabs(1)
        scrollToFirstSlide();
    }

    function roundData(number) {
        return Math.round(number);
    }

    const scrollTopFn = () => {
        setScrollTop(!scrollTop);
    };

    const scrollToFirstSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(0);
        }
    }

    return (
        <WeatherDataContext.Provider value={{
            weatherData,
            timeZone,
            changeLocation,
            changeUnitGroup,
            unitGroup,
            searchLocation,
            deleteLocation,
            setLocation,
            currentWeekDayHours,
            setCurrentWeekDayHours,
            roundData,
            isLoading,
            selectedWeekDayIndex,
            setSelectedWeekDayIndex,
            tabs,
            setTabs,
            swiperRef,
            scrollToFirstSlide,
        }}>
            {children}
        </WeatherDataContext.Provider>
    )
}

export default WeatherDataProvider;