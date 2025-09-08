import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SliderFirst() {
    return (
        <div>
            <Swiper className='h-screen'>
                <SwiperSlide>
                    <div className="bg-[url('/assets/firstsliderphoto.jpg')] h-[100vh]">
                        <div>
                            <p>SUMMER 2025</p>
                            <p>NEW COLLECTION</p>
                            <p>We know how large objects will act, but things on a small scale.</p>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </div>
    )
}