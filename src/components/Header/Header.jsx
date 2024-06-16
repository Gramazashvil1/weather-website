import Search from "/src/assets/images/search.svg?react"
import {Form, Input} from "antd";
import {useContext} from "react";
import {WeatherDataContext} from "../../context/weatherDataContext.jsx";

function Header() {

    const [form] = Form.useForm();
    const {changeLocation,changeUnitGroup,unitGroup} = useContext(WeatherDataContext);

    function searchLocation(place) {
        changeLocation(place.search)
        form.resetFields();
    }

    function preventNumbers(e) {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode >= 48 && charCode <= 57) {
            e.preventDefault();
        }
    }

    return (
        <header className="w-full px-[10px]">
            <div
                className="h-[60px] max-w-[1200px] px-[20px] m-auto gap-x-[10px] flex items-center justify-between rounded-2xl border-[1px] border-[#00000009] bg-[#000] bg-opacity-20">
                <Form onFinish={searchLocation} form={form}>
                    <Form.Item onKeyDown={preventNumbers}  name="search" rules={[{required: true, message:''},{warningOnly:true}]}>
                        <Input autoComplete="off" required={true}  placeholder="Search for location" className="h-[38px] text-[15px] pl-[10px] pr-[35px] pt-[1px] rounded-md text-main-white placeholder-[#b0c1d7] w-[180px] sm:w-[279px]"/>
                    </Form.Item>

                    <button name="search" aria-label="Search" type="submit"
                            className="absolute top-0 right-0 pl-[6px] h-[37px] w-[37px] opacity-70">
                        <Search/>
                    </button>
                </Form>

                <button
                    onClick={changeUnitGroup}
                    className="outline-0 w-[60px] min-w-[55px] h-[38px] pt-[2px] text-[15px] text-main-white rounded-3xl border-[1px] border-[#00000009] bg-[#000] bg-opacity-20 lg:hover:bg-opacity-30 transition duration-300"
                    aria-label="Fahrenheit">
                    {unitGroup === 'metric' ? '°C' : '°F'}
                </button>
            </div>
        </header>
    );
}

export default Header;