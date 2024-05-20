import Clear_Day from "/src/assets/images/clear-day.svg?react"


function CurrentWeather() {
    return (
        <section
            className="w-full h-[280px] justify-center flex sm:w-[300px] p-[25px] border-[1px] border-[#00000009] bg-[#000] bg-opacity-20 min-w-[300px] rounded-2xl text-main-white lg:w-[300px] sm:justify-start">
            <div className="h-full flex flex-col justify-between">
                <div>
                    <h1 className="text-[25px] leading-[29px] line-clamp-1 ">Tbilisi</h1>
                    <p className="text-[15px] leading-[18px]">Monday 06 February</p>
                    <p className="text-[15px] leading-[18px]">21:07:01</p>
                </div>
                <div className="flex flex-row gap-x-[30px]  py-[15px]">
                    <Clear_Day className="w-[90px] h-auto"/>
                    <p className="flex items-center text-[60px] font-bold">24°</p>
                </div>
                <p className="text-[15px] py-[1px] flex-wrap items-end flex line-clamp-2">
                    Partially cloudy
                </p>
            </div>
        </section>
    );
}

export default CurrentWeather;