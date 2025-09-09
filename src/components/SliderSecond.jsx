import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

export default function SliderSecond() {
    return (
        <div>
            <Swiper className="h-screen" modules={[Navigation]} navigation>
                <SwiperSlide>
                    <div className="h-screen bg-[#23856d] flex flex-col items-center py-20 gap-10 lg:flex-row lg:justify-around">
                        <div className='flex flex-col text-center justify-center items-center gap-10 lg:items-start '>
                            <p className='text-xl font-semibold text-white'>SUMMER 2025</p>
                            <h2 className='text-4xl font-bold text-white w-[15rem] lg:text-left lg:text-5xl lg:w-[20rem] lg:leading-16'>Vita Classic Product</h2>
                            <p className='text-white text-sm font-semibold w-[13rem] lg:w-[20rem] lg:text-left'>We know how large objects will act, We know how large objects will act.</p>
                            <div className='gap-10 flex flex-col lg:flex-row lg:items-center'>
                                <p className='text-2xl font-semibold text-white'>$16.48</p>
                                <button className="w-50 h-15 bg-green-500 text-white font-bold text-xl rounded hover:bg-green-600 transition">ADD TO CART</button>
                            </div>
                        </div>
                        <img src="/assets/secondsliderphoto.png" alt="" className='lg:h-[100vh]' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-screen bg-[#23856d] flex flex-col items-center py-20 gap-10 lg:flex-row lg:justify-around">
                        <div className='flex flex-col text-center justify-center items-center gap-10 lg:items-start '>
                            <p className='text-xl font-semibold text-white'>SUMMER 2025</p>
                            <h2 className='text-4xl font-bold text-white w-[15rem] lg:text-left lg:text-5xl lg:w-[20rem] lg:leading-16'>Vita Classic Product</h2>
                            <p className='text-white text-sm font-semibold w-[13rem] lg:w-[20rem] lg:text-left'>We know how large objects will act, We know how large objects will act.</p>
                            <div className='gap-10 flex flex-col lg:flex-row lg:items-center'>
                                <p className='text-2xl font-semibold text-white'>$16.48</p>
                                <button className="w-50 h-15 bg-green-500 text-white font-bold text-xl rounded hover:bg-green-600 transition">ADD TO CART</button>
                            </div>
                        </div>
                        <img src="/assets/secondsliderphoto.png" alt="" className='lg:h-[100vh]' />
                    </div>
                </SwiperSlide>

            </Swiper>
            <style jsx>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: white;
                    width: 3rem;
                    height: 3rem;
                }
            `}</style>
        </div>
    )
}