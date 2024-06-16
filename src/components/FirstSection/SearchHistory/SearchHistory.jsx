import {SwiperSlide} from 'swiper/react';
import Card from "../../Card/Card.jsx";
import {useContext} from "react";
import {WeatherDataContext} from "../../../context/weatherDataContext.jsx";
import SearchHistoryList from "../../SearchHistoryList/SearchHistoryList.jsx";

function SearchHistory() {
    const breakPoints = {
        1050: {
            slidesPerView: 1,
        }, 1190: {
            slidesPerView: 2,
        }
    }

    const {searchLocation, deleteLocation} = useContext(WeatherDataContext);
    const chunk1 = searchLocation.slice(0, 4);
    const chunk2 = searchLocation.slice(4, 8);

    return (
        <Card title="Search History"
              className="h-0 w-0 opacity-0 !absolute lg:w-full lg:max-w-[438px] lg:h-[280px] lg:max-h-[280px] lg:!relative lg:opacity-100"
              breakpoints={breakPoints}>
            <SwiperSlide>
                <SearchHistoryList chunk={chunk1} deleteLocation={(i) => deleteLocation(i)} classNameUl="xl:ml-[17px]"
                                   classNameLi="bg-[#384158] lg:hover:bg-[#31394d]"/>
            </SwiperSlide>

            <SwiperSlide>
                <SearchHistoryList chunk={chunk2} deleteLocation={(i) => deleteLocation(i + 4)}
                                   classNameUl="lg:mr-[10px]" classNameLi="bg-[#384158] lg:hover:bg-[#31394d]"/>
            </SwiperSlide>
        </Card>
    );
}

export default SearchHistory;