import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


export default function SliderFirst() {
    return (
        <div>
            <Swiper className="h-screen" modules={[Navigation]} navigation>
                <SwiperSlide>
                    <div className="h-screen bg-[url('/assets/firstsliderphoto.jpg')] flex flex-col items-center justify-center ">
                        <div className="flex flex-col items-center gap-8 lg:items-start">
                            <p className="text-xl text-white font-bold lg:text-2xl">SUMMER 2025</p>
                            <h2 className="text-4xl font-bold text-white text-center w-[15rem] lg:text-6xl lg:w-[40rem] lg:text-left">NEW COLLECTION</h2>
                            <p className="text-white w-[15rem] text-center text-xl lg:text-left lg:w-[30rem] lg:text-2xl lg:font-semibold">
                                We know how large objects will act, but things on a small scale.
                            </p>
                            <button className="w-60 h-20 bg-green-500 text-white font-bold text-2xl rounded hover:bg-green-600 transition">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-screen bg-[url('/assets/firstsliderphoto.jpg')] flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center gap-8 lg:items-start">
                            <p className="text-xl text-white font-bold lg:text-2xl">SUMMER 2025</p>
                            <h2 className="text-4xl font-bold text-white text-center w-[15rem] lg:text-6xl lg:w-[40rem] lg:text-left">NEW COLLECTION</h2>
                            <p className="text-white w-[15rem] text-center text-xl lg:text-left lg:w-[30rem] lg:text-2xl lg:font-semibold">
                                We know how large objects will act, but things on a small scale.
                            </p>
                            <button className="w-60 h-20 bg-green-500 text-white font-bold text-2xl rounded hover:bg-green-600 transition">
                                SHOP NOW
                            </button>
                        </div>
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
    );
}
