import Card from "../../Card/Card.jsx";
import {SwiperSlide} from "swiper/react";
import {useContext} from "react";
import {WeatherDataContext} from "../../../context/weatherDataContext.jsx";
import SearchHistoryList from "../../SearchHistoryList/SearchHistoryList.jsx";


function SearchHistoryBottom() {

    const breakPoints = {
        300: {
            slidesPerView: 1,
        }, 450: {
            slidesPerView: 2,
        }, 640: {
            slidesPerView: 1,
        }
    }

    const {searchLocation, deleteLocation} = useContext(WeatherDataContext);
    const chunk1 = searchLocation.slice(0, 4);
    const chunk2 = searchLocation.slice(4, 8);

    return (
        <Card title="Search History"
              className="w-full h-[280px] min-w-[300px] max-h-[280px] sm:w-[300px] sm:max-w-[300px] lg:hidden"
              breakpoints={breakPoints}>
            <SwiperSlide>
                <SearchHistoryList chunk={chunk1} deleteLocation={(i) => deleteLocation(i)} classNameUl="xl:ml-[17px]"
                                   classNameLi="bg-[#203652] lg:hover:bg-[#31394d]"/>
            </SwiperSlide>
            <SwiperSlide>
                <SearchHistoryList chunk={chunk2} deleteLocation={(i) => deleteLocation(i + 4)}
                                   classNameUl="lg:mr-[10px]" classNameLi="bg-[#203652] lg:hover:bg-[#31394d]"/>
            </SwiperSlide>
        </Card>
    );
}

export default SearchHistoryBottom;
