import Header from "./components/Header/Header.jsx";
import FirstSection from "./components/FirstSection/FirstSection.jsx";
import SecondSection from "./components/SecondSection/SecondSection.jsx";
import ThirdSection from "./components/ThirdSection/ThirdSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";

function App() {
    return (
        <>
            <Preloader/>
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <Footer/>
        </>
    )
}

export default App
