import {message, Popconfirm} from "antd";
import {useContext} from "react";
import {WeatherDataContext} from "../../context/weatherDataContext.jsx";
import DeleteIcon from "../../assets/images/delete-btn.svg?react";

function SearchHistoryList({classNameLi, classNameUl, chunk, deleteLocation}) {

    const handleDeleteHistory = (i) => {
        deleteLocation(i)
        message.success('location successfully deleted');
    };

    const {setLocation} = useContext(WeatherDataContext);

    return (
        <ul className={`flex items-center flex-col gap-y-[11px] text-[14px] pt-[60px] ${classNameUl}`}>
            {[...chunk, ...Array(4 - chunk.length).fill(null)].map((element, i) => (
                <li key={i}
                    className={`w-[185px] h-[42px] flex rounded-md transition-colors duration-200 overflow-hidden searchHistoryBtn ${classNameLi}`}>
                    {element ?
                        <>
                            <button
                                onClick={() => setLocation(element.address)}
                                type="primary" aria-label="SelectPlace"
                                className="w-full h-full flex items-center justify-between pl-[13px]">
                            <span className="line-clamp-1 capitalize">
                                {element.address}
                            </span>
                            </button>
                            <Popconfirm
                                title="Delete the location"
                                description="Are you sure to delete this location?"
                                onConfirm={() => handleDeleteHistory(i)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <button type="primary" aria-label="OpenModal"
                                        className="h-full pr-[10px] pl-[6px] opacity-55 transition-opacity duration-200 lg:hover:opacity-100">
                                    <DeleteIcon className="w-[18px] h-[18px]"/>
                                </button>
                            </Popconfirm>
                        </>
                        : <span className="flex justify-center items-center pl-[14px]">
                            Space for location
                        </span>
                    }
                </li>
            ))}
        </ul>
    );
}

export default SearchHistoryList;