import HourlyWeather from "./HourlyWeather/HourlyWeather.jsx";
import WeeklyWeather from "./WeeklyWeather/WeeklyWeather.jsx";

function SecondSection() {
    return (
        <div className="w-full px-[10px] mt-[20px]">
            <div className="max-w-[1200px] m-auto flex flex-col items-center gap-[15px] sm:flex-row">
                <WeeklyWeather/>
                <HourlyWeather/>
            </div>
        </div>
    );
}

export default SecondSection;