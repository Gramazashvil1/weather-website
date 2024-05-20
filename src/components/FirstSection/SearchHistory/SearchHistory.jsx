import {SwiperSlide} from 'swiper/react';
import {Modal} from "antd";
import Clear_Day from "/src/assets/images/clear-day.svg?react"
import DeleteIcon from "/src/assets/images/delete-btn.svg?react"
import Card from "../../Card/Card.jsx";
import {useState} from "react";


function SearchHistory() {

    const breakPoints = {
        1050: {
            slidesPerView: 1,
        }, 1190: {
            slidesPerView: 2,
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen((cur) => !cur);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal okText="Yes" cancelText="Cancel" closable={false} open={isModalOpen} onOk={handleOk}
                   onCancel={showModal} className="modalBtn">
                <p className="text-[17px]">Sure you want to delete?</p>
            </Modal>
            <Card title="Search History" className="w-full h-[280px] max-h-[280px] hidden lg:block"
                  breakpoints={breakPoints}>
                <SwiperSlide>
                    <ul className="xl:ml-[17px] flex items-center flex-col gap-y-[11px] text-[14px] pt-[60px] ">

                        <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200 overflow-hidden searchHistoryBtn">
                            <button type="primary" aria-label="SelectPlace"
                                    className="w-full h-full flex items-center justify-between pl-[11px] pr-[0]">
                                <span className="line-clamp-1">
                                    Tbilisi
                                </span>
                                <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                                </span>
                            </button>

                            <button onClick={showModal} type="submit" aria-label="OpenModal"
                                    className="h-full pr-[7px] pl-[6px] opacity-55 transition-opacity duration-200 lg:hover:opacity-100">
                                <DeleteIcon className="w-[18px] h-[18px]"/>
                            </button>
                        </li>
                        <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200 overflow-hidden searchHistoryBtn">
                            <button type="primary" aria-label="SelectPlace"
                                    className="w-full h-full flex items-center justify-between pl-[11px] pr-[0]">
                                <span className="line-clamp-1">
                                    Tbilisi
                                </span>
                                <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                                </span>
                            </button>

                            <button onClick={showModal} type="submit" aria-label="OpenModal"
                                    className="h-full pr-[7px] pl-[6px] opacity-55 transition-opacity duration-200 lg:hover:opacity-100">
                                <DeleteIcon className="w-[18px] h-[18px]"/>
                            </button>
                        </li>
                        <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200 overflow-hidden searchHistoryBtn">
                            <button type="primary" aria-label="SelectPlace"
                                    className="w-full h-full flex items-center justify-between pl-[11px] pr-[0]">
                                <span className="line-clamp-1">
                                    Tbilisi
                                </span>
                                <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                                </span>
                            </button>

                            <button onClick={showModal} type="submit" aria-label="OpenModal"
                                    className="h-full pr-[7px] pl-[6px] opacity-55 transition-opacity duration-200 lg:hover:opacity-100">
                                <DeleteIcon className="w-[18px] h-[18px]"/>
                            </button>
                        </li>
                        <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200 overflow-hidden searchHistoryBtn">
                            <button type="primary" aria-label="SelectPlace"
                                    className="w-full h-full flex items-center justify-between pl-[11px] pr-[0]">
                                <span className="line-clamp-1">
                                    Tbilisi
                                </span>
                                <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                                </span>
                            </button>

                            <button onClick={showModal} type="submit" aria-label="OpenModal"
                                    className="h-full pr-[7px] pl-[6px] opacity-55 transition-opacity duration-200 lg:hover:opacity-100">
                                <DeleteIcon className="w-[18px] h-[18px]"/>
                            </button>
                        </li>


                    </ul>
                </SwiperSlide>

                <SwiperSlide>
                    <ul className="flex items-center flex-col gap-y-[11px] text-[14px] pt-[60px] lg:mr-[10px]">
                        <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200 overflow-hidden searchHistoryBtn">
                            <button type="primary" aria-label="SelectPlace"
                                    className="w-full h-full flex items-center justify-between pl-[11px] pr-[0]">
                                <span className="line-clamp-1">
                                    Tbilisi
                                </span>
                                <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                                </span>
                            </button>

                            <button onClick={showModal} type="submit" aria-label="OpenModal"
                                    className="h-full pr-[7px] pl-[6px] opacity-55 transition-opacity duration-200 lg:hover:opacity-100">
                                <DeleteIcon className="w-[18px] h-[18px]"/>
                            </button>
                        </li>
                        <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200 overflow-hidden searchHistoryBtn">
                            <button type="primary" aria-label="SelectPlace"
                                    className="w-full h-full flex items-center justify-between pl-[11px] pr-[0]">
                                <span className="line-clamp-1">
                                    Tbilisi
                                </span>
                                <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                                </span>
                            </button>

                            <button onClick={showModal} type="submit" aria-label="OpenModal"
                                    className="h-full pr-[7px] pl-[6px] opacity-55 transition-opacity duration-200 lg:hover:opacity-100">
                                <DeleteIcon className="w-[18px] h-[18px]"/>
                            </button>
                        </li>
                        <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200 overflow-hidden searchHistoryBtn">
                            <button type="primary" aria-label="SelectPlace"
                                    className="w-full h-full flex items-center justify-between pl-[11px] pr-[0]">
                                <span className="line-clamp-1">
                                    Tbilisi
                                </span>
                                <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                                </span>
                            </button>

                            <button onClick={showModal} type="submit" aria-label="OpenModal"
                                    className="h-full pr-[7px] pl-[6px] opacity-55 transition-opacity duration-200 lg:hover:opacity-100">
                                <DeleteIcon className="w-[18px] h-[18px]"/>
                            </button>
                        </li>
                        <li className="w-[185px] h-[42px] flex bg-[#384158] rounded-md lg:hover:bg-[#31394d] transition-colors duration-200 overflow-hidden searchHistoryBtn">
                            <button type="primary" aria-label="SelectPlace"
                                    className="w-full h-full flex items-center justify-between pl-[11px] pr-[0]">
                                <span className="line-clamp-1">
                                    Tbilisi
                                </span>
                                <span className="flex items-center gap-[5px]">
                                <Clear_Day className="w-[18px] h-[18px]"/>
                                24°
                                </span>
                            </button>

                            <button onClick={showModal} type="submit" aria-label="OpenModal"
                                    className="h-full pr-[7px] pl-[6px] opacity-55 transition-opacity duration-200 lg:hover:opacity-100">
                                <DeleteIcon className="w-[18px] h-[18px]"/>
                            </button>
                        </li>

                    </ul>
                </SwiperSlide>
            </Card>
        </>
    );
}

export default SearchHistory;