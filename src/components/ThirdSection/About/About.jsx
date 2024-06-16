import Card from "../../Card/Card.jsx";

function About() {
    return (
        <Card swiperDisable={true} title="About"
              className="w-full h-full sm:h-[280px] sm:justify-start lg:h-full pt-[60px] pb-[20px]">

            <p className="px-[25px] text-[15px]">
                Welcome to our Weather Forecast Website! We provide accurate, up-to-date weather information, including
                current conditions and detailed forecasts for the week and hour. Our user-friendly platform works
                seamlessly on all devices, ensuring you can stay informed and plan with confidence, wherever you are.
            </p>

        </Card>
    );
}

export default About;