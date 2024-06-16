import CloudCover from "/src/assets/images/con_cloudcover.svg?react"
import FeelsLike from "/src/assets/images/con_feelslike.svg?react"
import Humidity from "/src/assets/images/con_humidity.svg?react"
import MinMax from "/src/assets/images/con_minmax.svg?react"
import Pressure from "/src/assets/images/con_pressure.svg?react"
import Sunrise from "/src/assets/images/con_sunrise.svg?react"
import Sunset from "/src/assets/images/con_sunset.svg?react"
import UvIndex from "/src/assets/images/con_uvindex.svg?react"
import Visibility from "/src/assets/images/con_visibility.svg?react"
import Wind from "/src/assets/images/con_wind.svg?react"
import Card from "../../Card/Card.jsx";
import {SwiperSlide} from 'swiper/react';
import {useContext, useEffect, useState} from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import {WeatherDataContext} from "../../../context/weatherDataContext.jsx";

dayjs.extend(utc);
dayjs.extend(timezone);

function AdditionalInfo() {

    const adIcons = {
        MinMax: <MinMax className="w-[28px] h-[28px] invert"/>,
        Wind: <Wind className="w-[27px] h-[27px] invert"/>,
        Humidity: <Humidity className="w-[23px] h-[23px] invert"/>,
        FeelsLike: <FeelsLike className="w-[28px] h-[28px] invert"/>,
        Pressure: <Pressure className="w-[29px] h-[29px] invert"/>,
        Visibility: <Visibility className="w-[26px] h-[26px] invert"/>,
        UvIndex: <UvIndex className="w-[25px] h-[25px] "/>,
        CloudCover: <CloudCover className="w-[29px] h-[29px] invert"/>,
        Sunrise: <Sunrise className="w-[26px] h-[26px] invert"/>,
        Sunset: <Sunset className="w-[26px] h-[26px] invert"/>,
    }

    const breakPoints = {
        450: {
            slidesPerView: 2,
        }, 640: {
            slidesPerView: 1,
        }, 768: {
            slidesPerView: 2,
        }
    }

    const {weatherData, timeZone, unitGroup, roundData} = useContext(WeatherDataContext);
    const [currentTime, setCurrentTime] = useState('');
    const days = weatherData?.days ?? [];
    const currentDay = days[0];
    const hours = days[0]?.hours ?? [];
    const currentHour = hours.find(time => currentTime === time.datetime);
    const {tempmin, tempmax, sunrise, sunset} = currentDay ?? []
    const {windspeed, humidity, feelslike, pressure, visibility, uvindex, cloudcover} = currentHour ?? {}

    useEffect(() => {
        if (timeZone) {
            setCurrentTime(dayjs().tz(timeZone).format('HH:00:00'))
        }
    }, [timeZone]);

    return (
        <Card title="Additional information" className="w-full h-[280px] max-h-[280px] lg:w-[430px] lg:min-w-[430px]"
              breakpoints={breakPoints}>
            <SwiperSlide>
                <ul className="w-full h-full flex flex-col items-center justify-center gap-x-[5px] gap-y-[8px] text-[15px] pt-[41px]">
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px] duration-150">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.MinMax}
                        </span>
                        <p className="h-[22px]">
                            Min: {roundData(tempmin)}°
                            Max: {roundData(tempmax)}°
                        </p>
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px] duration-150">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.Wind}
                        </span>
                        <p className="h-[22px]">
                            Wind: {windspeed} {unitGroup === 'metric' ? 'kp/h' : 'mp/h'}
                        </p>
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px] duration-150">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.Humidity}
                        </span>
                        <p className="h-[22px]">
                            Humidity: {roundData(humidity)}%
                        </p>
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px] duration-150">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.FeelsLike}
                        </span>
                        <p className="h-[22px]">
                            Feels like: {roundData(feelslike)}°
                        </p>
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px] duration-150">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.Pressure}
                        </span>
                        <p className="h-[22px]">
                            Pressure: {pressure} mb
                        </p>
                    </li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className="w-full h-full flex flex-col items-center justify-center gap-x-[5px] gap-y-[8px] text-[15px] pt-[41px]">
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px] duration-150">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.Visibility}
                        </span>
                        <p className="h-[22px]">
                            Visibility: {roundData(visibility)} {unitGroup === 'metric' ? 'km' : 'mi'}
                        </p>
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px] duration-150">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.UvIndex}
                        </span>
                        <p className="h-[22px]">
                            UV index: {roundData(uvindex)}
                        </p>
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px] duration-150">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.CloudCover}
                        </span>
                        <p className="h-[22px]">
                            Cloud cover: {roundData(cloudcover)}%
                        </p>
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px] duration-150">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.Sunrise}
                        </span>
                        <p className="h-[22px]">
                            Sunrise: {sunrise?.split(':').slice(0, 2).join(':')}
                        </p>
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px] duration-150">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.Sunset}
                        </span>
                        <p className="h-[22px]">
                            Sunset: {sunset?.split(':').slice(0, 2).join(':')}
                        </p>
                    </li>
                </ul>
            </SwiperSlide>
        </Card>
    );
}

export default AdditionalInfo;