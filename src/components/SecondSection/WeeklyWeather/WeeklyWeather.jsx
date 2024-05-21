import Card from "../../Card/Card.jsx";
import {useState} from "react";
import Clear_Day from "/src/assets/images/clear-day.svg?react"

function WeeklyWeather() {

    const [tabs, setTabs] = useState(1);

    function switchTab(index) {
        setTabs(index)
    }

    return (
        <Card title="Forecast" className="w-full min-w-[300px] h-[430px] sm:w-[300px]" swiperDisable={true}>

            <div className="absolute top-[10px] right-[25px] flex justify-end pb-[20px] gap-[6px] text-[14px]">
                <button
                    className={`transition-all duration-500 rounded-md px-[7px] py-[2px] ${tabs === 1 ? "bg-[#2e67b4]" : "bg-[#3d3c47]"}`}
                    onClick={() => switchTab(1)}>
                    This Week
                </button>

                <button
                    className={`transition-all duration-500 rounded-md px-[7px] py-[2px] ${tabs === 2 ? "bg-[#2e67b4]" : "bg-[#3d3c47]"}`}
                    onClick={() => switchTab(2)}>
                    Next Week
                </button>
            </div>

            <div className="relative mt-[51px]">
                <div
                    className={`absolute top-0 w-full h-[370px] transition-all duration-500 ${tabs === 1 ? "opacity-100 z-10 translate-y-[0]" : "translate-y-[500px] opacity-0 z-[-5]"}`}>
                    <ul className="flex flex-col justify-center items-center gap-y-[6px] pt-[10px] px-[25px] text-[16px] sm:items-start">
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center bg-[#3f6ca8] justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                    </ul>
                </div>


                <div
                    className={`absolute top-0 w-full h-[370px] transition-all duration-500 ${tabs === 2 ? "opacity-100 z-10 translate-y-[0]" : "translate-y-[500px] opacity-0 z-[-5]"}`}>
                    <ul className="flex flex-col justify-center items-center gap-y-[6px] pt-[10px] px-[25px] text-[16px] sm:items-start">

                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>

                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                        <li className="w-[250px] h-[45px]">
                            <button
                                className="w-full h-full flex items-center justify-between px-[13px] rounded-xl lg:hover:bg-[#3f6ca8] transition-colors duration-200">
                                <Clear_Day className="w-[28px] h-[28px]"/>
                                <span className="pt-[2px]">24°/22°</span>
                                <span className="pt-[2px] pl-[25px]">28 Jul, Sun</span>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </Card>
    );
}

export default WeeklyWeather;