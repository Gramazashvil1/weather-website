import WeatherIcon from "../../WeatherIcon/WeatherIcon.jsx";
import {useContext, useEffect, useState} from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import {WeatherDataContext} from "../../../context/weatherDataContext.jsx";

dayjs.extend(utc);
dayjs.extend(timezone)

function CurrentWeather() {

    const {weatherData, timeZone,roundData} = useContext(WeatherDataContext);
    const [currentTime, setCurrentTime] = useState('');
    const datetimeEpoch = weatherData?.currentConditions?.datetimeEpoch;
    const date = dayjs.unix(datetimeEpoch).format('dddd D MMMM');

    useEffect(() => {
        if (timeZone) {
            const updateTime = () => {
                setCurrentTime(dayjs().tz(timeZone).format('HH : mm : ss'))
            };
            updateTime();
            const intervalId = setInterval(updateTime, 1000)
            return () => clearInterval(intervalId)
        }
    }, [timeZone]);

    const {currentConditions: {temp, conditions, icon} = {}, address} = weatherData ?? {};

    return (
        <section
            className="w-full h-[280px] justify-center flex sm:w-[300px] p-[25px] border-[1px] border-[#00000009] bg-[#000] bg-opacity-20 min-w-[300px] rounded-2xl text-main-white lg:w-[300px] sm:justify-start">
            <div className="h-full flex flex-col justify-between">
                <div>
                    <h1 className="capitalize text-[26px] leading-[29px] line-clamp-1">
                        {address}
                    </h1>
                    <p className="text-[15px] leading-[19px] tracking-wide">
                        {date}
                    </p>
                    <p className="text-[15px] leading-[18px] tracking-tighter">
                        {currentTime}
                    </p>
                </div>
                <div className="flex flex-row gap-x-[30px]  py-[15px]">
                    <WeatherIcon weather={icon} className="w-[95px] h-auto"/>
                    <p className="flex items-center text-[55px] font-bold">
                        {roundData(temp)}°
                    </p>
                </div>
                <p className="text-[15px] py-[1px] flex-wrap items-end flex line-clamp-2 tracking-wide">
                    {conditions}
                </p>
            </div>
        </section>
    );
}

export default CurrentWeather;