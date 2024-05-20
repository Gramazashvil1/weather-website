import Search from "/src/assets/images/search.svg?react"

function Header() {
    return (
        <header className="w-full px-[10px]">
            <div
                className="h-[60px] max-w-[1200px] px-[20px] m-auto gap-x-[10px] flex items-center justify-between rounded-2xl border-[1px] border-[#00000009] bg-[#000] bg-opacity-20">
                <form className="relative">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search for location"
                        className="outline-0 h-[38px] text-[15px] pl-[10px] pr-[35px] pt-[1px] rounded-md text-main-white placeholder-[#b0c1d7] border-[1px] border-[#00000009] bg-[#000] bg-opacity-20 w-[180px] sm:w-[279px]"
                    />
                    <button name="search" aria-label="Search" type="submit" className="absolute right-0 pl-[6px] h-[37px] w-[37px] opacity-70">
                        <Search/>
                    </button>
                </form>
                <button
                    className="outline-0 w-[60px] min-w-[55px] h-[38px] pt-[2px] text-[15px] text-main-white rounded-3xl border-[1px] border-[#00000009] bg-[#000] bg-opacity-20 lg:hover:bg-opacity-30 transition duration-300"
                    aria-label="celsius/Fahrenheit">
                    °C
                </button>
            </div>
        </header>
    );
}

export default Header;