import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


export default function SliderFirst() {
    return (
        <div>
            <Swiper className="h-screen" modules={[Navigation]} navigation>
                <SwiperSlide>
                    <div className="h-screen bg-[url('/assets/firstsliderphoto.jpg')] flex items-center pl-50">
                        <div className=" flex flex-col w-1/2 pl-20 gap-10">
                            <p className="text-2xl text-white font-bold">SUMMER 2025</p>
                            <h2 className="text-6xl font-bold text-white mt-2">NEW COLLECTION</h2>
                            <p className="text-white font-bold text-xl mt-4 w-[23rem]">
                                We know how large objects will act, but things on a small scale.
                            </p>
                            <button className="mt-6 w-60 h-20 bg-green-500 text-white font-bold text-2xl rounded hover:bg-green-600 transition">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-screen bg-[url('/assets/firstsliderphoto.jpg')] flex items-center pl-50">
                        <div className=" flex flex-col w-1/2 pl-20 gap-10">
                            <p className="text-2xl text-white font-bold">SUMMER 2025</p>
                            <h2 className="text-6xl font-bold text-white mt-2">NEW COLLECTION</h2>
                            <p className="text-white font-bold text-xl mt-4 w-[23rem]">
                                We know how large objects will act, but things on a small scale.
                            </p>
                            <button className="mt-6 w-60 h-20 bg-green-500 text-white font-bold text-2xl rounded hover:bg-green-600 transition">
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
