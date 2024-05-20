import {Swiper} from 'swiper/react';
import {FreeMode, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '/src/index.css';

function Card({
                  children,
                  className,
                  slidesPerView,
                  title,
                  breakpoints,
                  swiperDisable,
                  freeMode,
                  swiperClassName,
                  spaceBetween,
                  disablePagination
              }) {
    return (
        <section
            className={`${className} relative overflow-hidden rounded-2xl text-main-white border-[1px] border-[#00000009] bg-[#000] bg-opacity-15`}>
            <div
                className="w-full h-[45px] flex items-center pl-[25px] pt-[2px] bg-[#000] bg-opacity-10 text-[16px] top-0 absolute">
                <h1>{title}</h1>
                {freeMode &&
                    <div
                        className="absolute right-[25px] top-[9px] rounded-md px-[7px] py-[2px] bg-[#2e67b4] text-[14px]">
                        Scroll Right
                    </div>}
            </div>
            {swiperDisable
                ? children
                : <Swiper
                    freeMode={freeMode}
                    slidesPerView={slidesPerView || 1}
                    spaceBetween={spaceBetween || 0}
                    pagination={disablePagination ? false : {clickable: true}}
                    breakpoints={breakpoints}
                    modules={[Pagination, FreeMode]}
                    className={swiperClassName}
                >
                    {children}
                </Swiper>
            }
            {freeMode && <div
                className="mt-[-17px] z-40 rounded-t-3xl h-[20px] !max-w-[833px] ml-[25px] mr-[10px] bg-[#000] bg-opacity-[7%]"></div>
            }
        </section>
    );
}

export default Card;