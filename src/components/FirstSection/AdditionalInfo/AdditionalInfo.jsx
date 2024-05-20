import {SwiperSlide} from 'swiper/react';
import Card from "../../Card/Card.jsx";
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

    return (
        <Card title="Additional information" className="w-full h-[280px] max-h-[280px] lg:w-[430px] lg:min-w-[430px]"
              breakpoints={breakPoints}>

            <SwiperSlide>
                <ul className="w-full h-full flex flex-col items-center justify-center gap-x-[5px] gap-y-[8px] text-[15px] pt-[41px]">

                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center transition-all duration-200 lg:justify-start lg:pl-[23px] lg:w-full lg:cursor-pointer lg:hover:translate-x-[3px]">
                        <span
                            className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                            {adIcons.MinMax}
                        </span>
                        Min: 11° Max: 17°
                    </li>

                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full">
                            <span
                                className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                                {adIcons.Wind}
                            </span>
                        Wind: 13km/h
                    </li>

                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full">
                            <span
                                className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                                {adIcons.Humidity}
                            </span>
                        Humidity: 46%
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full">
                            <span
                                className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                                {adIcons.FeelsLike}
                            </span>
                        Feels Like: 27°
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full">
                            <span
                                className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                                {adIcons.Pressure}
                            </span>
                        Pressure: 101.8kpa
                    </li>
                </ul>
            </SwiperSlide>

            <SwiperSlide>
                <ul className="w-full h-full flex flex-col items-center justify-center gap-x-[5px] gap-y-[8px] text-[15px] pt-[41px]">
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full">
                            <span
                                className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                                {adIcons.Visibility}
                            </span>
                        Visibility: 10km
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full">
                            <span
                                className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                                {adIcons.UvIndex}
                            </span>
                        UV Index: 4
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full">
                            <span
                                className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                                {adIcons.CloudCover}
                            </span>
                        Cloud Cover: 5
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full">
                            <span
                                className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                                {adIcons.Sunrise}
                            </span>
                        Sunrise: 08:00
                    </li>
                    <li className="w-[190px] pl-[10px] flex gap-x-[7px] items-center lg:justify-start lg:pl-[23px] lg:w-full">
                            <span
                                className="w-[35px] h-[35px] bg-[#353e54] flex items-center justify-center bg-opacity-60 rounded-3xl">
                                {adIcons.Sunset}
                            </span>
                        Sunset: 18:00
                    </li>
                </ul>
            </SwiperSlide>
        </Card>
    );
}

export default AdditionalInfo;