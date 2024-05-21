import Card from "../../Card/Card.jsx";

function About() {
    return (
        <Card swiperDisable={true} title="About" className="w-full h-full sm:h-[280px] sm:justify-start lg:h-full pt-[60px] pb-[20px]">

             <p className="px-[25px] text-[15px]">
                 Lorem sit amet, consectetur adipisicing elit. Blanditiis, neque, quidem  quisquam. Consequatur illum quia quo saepe volup
                 Lorem dolor sit amet, consectetur adipisicing  Blanditiis, neque, quidem? Animi ex, quisquam. Consequatur illum quia quo saepe
                 Lorem ipsum dolor sit amet, consectetur  elit. Blanditiis.
             </p>

        </Card>
    );
}

export default About;