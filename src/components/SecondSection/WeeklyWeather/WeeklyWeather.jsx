import Card from "../../Card/Card.jsx";
import {useContext, useEffect, useState} from "react";
import WeatherIcon from "../../WeatherIcon/WeatherIcon.jsx";
import {WeatherDataContext} from "../../../context/weatherDataContext.jsx";
import dayjs from "dayjs";

function WeeklyWeather() {

    const {
        weatherData,
        timeZone,
        roundData,
        setCurrentWeekDayHours,
        selectedWeekDayIndex,
        setSelectedWeekDayIndex,
        tabs,
        setTabs,
        scrollToFirstSlide
    } = useContext(WeatherDataContext);

    const [currentTime, setCurrentTime] = useState('');
    const weekDays = weatherData?.days ?? [];
    const firstWeek = weekDays.slice(0, 7);
    const secondWeek = weekDays.slice(7, 14);

    function switchTab(index) {
        setTabs(index)
    }

    function getAndFormatData(data) {
        return dayjs.unix(data).format('DD MMM, ddd');
    }

    function selectWeekDay(index) {
        const currentDay = weekDays[index]
        const selectedDay = currentDay?.hours;
        if (!index) {
            const filteredSelectedDay = selectedDay?.hours?.filter(time => currentTime <= time.datetime)
            if (filteredSelectedDay) {
                setCurrentWeekDayHours(filteredSelectedDay);
            }
        } else if (index > 0) {
            setCurrentWeekDayHours(selectedDay)
        }
        setSelectedWeekDayIndex(index)
        scrollToFirstSlide()
    }

    useEffect(() => {
        if (!selectedWeekDayIndex) {
            const filteredHours = weekDays[0]?.hours?.filter(time => currentTime <= time.datetime);
            if (filteredHours) {
                setCurrentWeekDayHours(filteredHours);
            }
        }
        if (timeZone) {
            setCurrentTime(dayjs().tz(timeZone).format('HH:00:00'))
        }
    }, [selectedWeekDayIndex, currentTime, timeZone, weekDays]);

    return (
        <Card title="Forecast" className="w-full min-w-[300px] h-[430px] sm:w-[300px]" swiperDisable={true}>
            <div className="absolute top-[10px] right-[25px] flex justify-end pb-[20px] gap-[6px] text-[14px]">
                <button
                    className={`transition-all duration-500 rounded-md px-[7px] py-[2px] ${tabs === 1 ? "bg-[#2e67b4]" : "bg-[#3d3c47]"}`}
                    onClick={() => switchTab(1)}
                >
                    This Week
                </button>
                <button
                    className={`transition-all duration-500 rounded-md px-[7px] py-[2px] ${tabs === 2 ? "bg-[#2e67b4]" : "bg-[#3d3c47]"}`}
                    onClick={() => switchTab(2)}
                >
                    Next Week
                </button>
            </div>

            <div className="relative mt-[51px]">
                <div
                    className={`absolute top-0 w-full h-[370px] transition-all duration-500 ${tabs === 1 ? "opacity-100 z-10 translate-y-[0]" : "translate-y-[500px] opacity-0 z-[-5]"}`}>
                    <ul className="flex flex-col justify-center items-center gap-y-[6px] pt-[10px] px-[25px] sm:items-start">
                        {firstWeek.map((week, index) => (
                            <li key={index} onClick={() => selectWeekDay(index)} className="w-[250px] h-[45px]">
                                <button
                                    className={`w-full h-full flex items-center justify-between pl-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200 ${selectedWeekDayIndex === index ? 'bg-[#3f6ca8]' : 'bg-transparent'}`}>
                                    <WeatherIcon weather={week?.icon} className="w-[28px] h-[28px"/>
                                    <span className="pt-[2px] pl-[10px] text-[16px]">
                                        {roundData(week?.tempmin)}° / {roundData(week?.tempmax)}°
                                    </span>
                                    <span className="pt-[2px] ml-[10px] min-w-[95px] text-[15px] text-left">
                                        {getAndFormatData(week?.datetimeEpoch)}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className={`absolute top-0 w-full h-[370px] transition-all duration-500 ${tabs === 2 ? "opacity-100 z-10 translate-y-[0]" : "translate-y-[500px] opacity-0 z-[-5]"}`}>
                    <ul className="flex flex-col justify-center items-center gap-y-[6px] pt-[10px] px-[25px] sm:items-start">
                        {secondWeek.map((week, index) => (
                            <li key={index} onClick={() => selectWeekDay(index + 7)} className="w-[250px] h-[45px]">
                                <button
                                    className={`w-full h-full flex items-center justify-between pl-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200 ${selectedWeekDayIndex === index + 7 ? 'bg-[#3f6ca8]' : 'bg-transparent'}`}>
                                    <WeatherIcon weather={week?.icon} className="w-[28px] h-[28px"/>
                                    <span className="pt-[2px] pl-[10px] text-[16px]">
                                        {roundData(week?.tempmin)}° / {roundData(week?.tempmax)}°
                                    </span>
                                    <span className="pt-[2px] ml-[10px] min-w-[95px] text-[15px] text-left">
                                        {getAndFormatData(week?.datetimeEpoch)}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
}

export default WeeklyWeather;