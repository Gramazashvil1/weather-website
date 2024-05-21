import Card from "../../Card/Card.jsx";
import {SwiperSlide} from "swiper/react";
import Clear_Day from "../../../assets/images/clear-day.svg?react";


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

    return (

        <Card title="Search History" className="w-full h-[280px] min-w-[300px] max-h-[280px] sm:w-[300px] sm:max-w-[300px] lg:hidden" breakpoints={breakPoints}>


            <SwiperSlide>
                <ul className="xl:ml-[17px] flex items-center flex-col gap-y-[11px] text-[14px] pt-[60px] ">
                    <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200">

                        <button className="w-full h-full flex items-center justify-between pl-[11px]">
                            <span className="pt-[1px] line-clamp-1">
                                Tbilisi
                            </span>
                            <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                            </span>
                        </button>
                        <button className="h-full">
                                <span
                                    className="w-[30px] h-[18px] flex justify-center items-center rounded-md text-[15px] rotate-90 tracking-widest transition-all duration-200 lg:hover:bg-[#557cae]">
                                    •••
                                </span>
                        </button>
                    </li>
                    <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200">
                        <button className="w-full h-full flex items-center justify-between pl-[11px]">
                            <span className="pt-[1px] line-clamp-1">
                                Tbilisi
                            </span>
                            <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                            </span>
                        </button>
                        <button className="h-full">
                                <span
                                    className="w-[30px] h-[18px] flex justify-center items-center rounded-md text-[15px] rotate-90 tracking-widest transition-all duration-200 lg:hover:bg-[#557cae]">
                                    •••
                                </span>
                        </button>
                    </li>
                    <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200">
                        <button className="w-full h-full flex items-center justify-between pl-[11px]">
                            <span className="pt-[1px] line-clamp-1">
                                Tbilisi
                            </span>
                            <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                            </span>
                        </button>
                        <button className="h-full">
                                <span
                                    className="w-[30px] h-[18px] flex justify-center items-center rounded-md text-[15px] rotate-90 tracking-widest transition-all duration-200 lg:hover:bg-[#557cae]">
                                    •••
                                </span>
                        </button>
                    </li>
                    <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200">
                        <button className="w-full h-full flex items-center justify-between pl-[11px]">
                            <span className="pt-[1px] line-clamp-1">
                                Tbilisi
                            </span>
                            <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                            </span>
                        </button>
                        <button className="h-full">
                                <span
                                    className="w-[30px] h-[18px] flex justify-center items-center rounded-md text-[15px] rotate-90 tracking-widest transition-all duration-200 lg:hover:bg-[#557cae]">
                                    •••
                                </span>
                        </button>
                    </li>
                </ul>

            </SwiperSlide>

            <SwiperSlide>
                <ul className="flex items-center flex-col gap-y-[11px] text-[14px] pt-[60px] lg:mr-[10px]">
                    <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200">
                        <button className="w-full h-full flex items-center justify-between pl-[11px]">
                            <span className="pt-[1px] line-clamp-1">
                                Tbilisi
                            </span>
                            <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                            </span>
                        </button>
                        <button className="h-full">
                                <span
                                    className="w-[30px] h-[18px] flex justify-center items-center rounded-md text-[15px] rotate-90 tracking-widest transition-all duration-200 lg:hover:bg-[#557cae]">
                                    •••
                                </span>
                        </button>
                    </li>
                    <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200">
                        <button className="w-full h-full flex items-center justify-between pl-[11px]">
                            <span className="pt-[1px] line-clamp-1">
                                Tbilisi
                            </span>
                            <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                            </span>
                        </button>
                        <button className="h-full">
                                <span
                                    className="w-[30px] h-[18px] flex justify-center items-center rounded-md text-[15px] rotate-90 tracking-widest transition-all duration-200 lg:hover:bg-[#557cae]">
                                    •••
                                </span>
                        </button>
                    </li>
                    <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200">
                        <button className="w-full h-full flex items-center justify-between pl-[11px]">
                            <span className="pt-[1px] line-clamp-1">
                                Tbilisi
                            </span>
                            <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                            </span>
                        </button>
                        <button className="h-full">
                                <span
                                    className="w-[30px] h-[18px] flex justify-center items-center rounded-md text-[15px] rotate-90 tracking-widest transition-all duration-200 lg:hover:bg-[#557cae]">
                                    •••
                                </span>
                        </button>
                    </li>
                    <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200">
                        <button className="w-full h-full flex items-center justify-between pl-[11px]">
                            <span className="pt-[1px] line-clamp-1">
                                Tbilisi
                            </span>
                            <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                            </span>
                        </button>
                        <button className="h-full">
                                <span
                                    className="w-[30px] h-[18px] flex justify-center items-center rounded-md text-[15px] rotate-90 tracking-widest transition-all duration-200 lg:hover:bg-[#557cae]">
                                    •••
                                </span>
                        </button>
                    </li>
                </ul>

            </SwiperSlide>
        </Card>
    );
}

export default SearchHistoryBottom;
