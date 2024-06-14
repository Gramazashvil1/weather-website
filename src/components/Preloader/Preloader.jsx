import {useContext} from "react";
import {WeatherDataContext} from "../../context/weatherDataContext.jsx";
import {Spin} from "antd";

function Preloader() {
    const {isLoading} = useContext(WeatherDataContext);
    return (
        <div className={`preloader ${isLoading ? '' : 'fade-out'}`}>
            <Spin size="large"/>
        </div>


    );
}

export default Preloader;