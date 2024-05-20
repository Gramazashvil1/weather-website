import CurrentWeather from "./CurrentWeather/CurrentWeather.jsx";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo.jsx";
import SearchHistory from "./SearchHistory/SearchHistory.jsx";

function FirstSection() {
    return (
        <div className="w-full px-[10px] mt-[20px]">
            <div className="max-w-[1200px] m-auto flex flex-col items-center gap-[15px] sm:flex-row md:justify-between">
                <CurrentWeather/>
                <AdditionalInfo/>
                <SearchHistory/>
            </div>
        </div>
    );
}

export default FirstSection;