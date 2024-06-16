import Card from "../../Card/Card.jsx";
import {SwiperSlide} from "swiper/react";
import WeatherIcon from "../../WeatherIcon/WeatherIcon.jsx";
import {useContext} from "react";
import {WeatherDataContext} from "../../../context/weatherDataContext.jsx";

function HourlyWeather() {

    const {currentWeekDayHours, roundData, swiperRef, scrollToFirstSlide} = useContext(WeatherDataContext);

    return (
        <Card title="Hourly Weather" freeMode={true} scrollToFirstSlide={scrollToFirstSlide} swiperRef={swiperRef}
              className="w-full shadow-[inset_0_-70px_50px_-20px_rgba(0,0,0,0.06)] min-w-[300px] h-[430px] max-h-[430px] pr-[14px] pt-[45px]"
              slidesPerView={"auto"} swiperClassName="pl-[25px] pr-[11px] cursor-grab active:cursor-grabbing"
              spaceBetween={13} disablePagination={true}
        >
            {currentWeekDayHours?.map((hour, index) => (
                <SwiperSlide key={index} className="!w-[128px]">
                    <div
                        className="w-[128px] min-w-[128px] h-[300px]  mt-[26px] flex flex-col gap-y-[15px] items-center">
                        <p className="text-[18px] tracking-wide">
                            {hour?.datetime?.split(':').slice(0, 2).join(':')}
                        </p>
                        <div
                            className="h-[240px] w-full bg-[#2d3446] bg-opacity-45 pt-[25px] flex flex-col items-center overflow-hidden justify-between rounded-2xl shadow-inner shadow-[#2f2f2f30]">
                            <WeatherIcon weather={hour?.icon} className="h-[50px] w-[50px]"/>
                            <p className="text-[18px]">
                                {roundData(hour?.temp)}°
                            </p>
                            <div
                                className="w-full h-[95px] flex justify-center items-center bg-[#2d3446] bg-opacity-45">
                                <p className="text-[14px] text-center px-[10px] line-clamp-3">
                                    {hour?.conditions}
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Card>
    );
}

export default HourlyWeather;