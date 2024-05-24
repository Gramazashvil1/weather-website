import ClearDay from "/src/assets/images/clear-day.svg?react";
import ClearNight from "/src/assets/images/clear-night.svg?react";
import Cloudy from "/src/assets/images/cloudy.svg?react";
import Fog from "/src/assets/images/fog.svg?react";
import Hail from "/src/assets/images/hail.svg?react";
import PartlyCloudyDay from "/src/assets/images/partly-cloudy-day.svg?react";
import PartlyCloudyNight from "/src/assets/images/partly-cloudy-night.svg?react";
import Rain from "/src/assets/images/rain.svg?react";
import RainSnow from "/src/assets/images/rain-snow.svg?react";
import RainSnowShowersDay from "/src/assets/images/rain-snow-showers-day.svg?react";
import RainSnowShowersNight from "/src/assets/images/rain-snow-showers-night.svg?react";
import ShowersDay from "/src/assets/images/showers-day.svg?react";
import ShowersNight from "/src/assets/images/showers-night.svg?react";
import Sleet from "/src/assets/images/sleet.svg?react";
import Snow from "/src/assets/images/snow.svg?react";
import SnowShowersDay from "/src/assets/images/snow-showers-day.svg?react";
import SnowShowersNight from "/src/assets/images/snow-showers-night.svg?react";
import Thunder from "/src/assets/images/thunder.svg?react";
import ThunderRain from "/src/assets/images/thunder-rain.svg?react";
import ThunderShowersDay from "/src/assets/images/thunder-showers-day.svg?react";
import ThunderShowersNight from "/src/assets/images/thunder-showers-night.svg?react";
import Wind from "/src/assets/images/wind.svg?react";

const iconMap = {
    "clear-day": ClearDay,
    "clear-night": ClearNight,
    "cloudy": Cloudy,
    "fog": Fog,
    "hail": Hail,
    "partly-cloudy-day": PartlyCloudyDay,
    "partly-cloudy-night": PartlyCloudyNight,
    "rain": Rain,
    "rain-snow": RainSnow,
    "rain-snow-showers-day": RainSnowShowersDay,
    "rain-snow-showers-night": RainSnowShowersNight,
    "showers-day": ShowersDay,
    "showers-night": ShowersNight,
    "sleet": Sleet,
    "snow": Snow,
    "snow-showers-day": SnowShowersDay,
    "snow-showers-night": SnowShowersNight,
    "thunder": Thunder,
    "thunder-rain": ThunderRain,
    "thunder-showers-day": ThunderShowersDay,
    "thunder-showers-night": ThunderShowersNight,
    "wind": Wind,
};

function WeatherIcon({weather, className}) {
    const IconComponent = iconMap[weather] || null;

    return (
        <>
            {IconComponent ? <IconComponent className={className}/> : <p>Icon not found</p>}
        </>
    );
}

export default WeatherIcon;