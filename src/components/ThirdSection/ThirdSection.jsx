import About from "./About/About.jsx";
import SearchHistoryBottom from "./SearchHistoryBottom/SearchHistoryBottom.jsx";

function ThirdSection() {
    return (
        <div className="w-full px-[10px] mt-[20px]">
            <div className="max-w-[1200px] m-auto flex flex-col items-center gap-[15px] sm:flex-row md:justify-between">
                <SearchHistoryBottom/>
                <About/>
            </div>
        </div>
    );
}

export default ThirdSection;