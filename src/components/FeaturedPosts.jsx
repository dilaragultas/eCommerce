import { AlarmClock, ChartArea, ChevronRight } from "lucide-react"

export default function FeaturedPost() {
    const post = [
        "/assets/mobilefeature1.jpg",
        "/assets/mobilefeature2.jpg",
        "/assets/mobilefeature3.jpg",
        "/assets/feature1.jpg",
        "/assets/feature2.jpg",
        "/assets/feature3.jpg",
    ]
    return (
        <div className="flex flex-col gap-12 items-center">
            <div className="flex flex-col items-center gap-6 ">
                <p className="font-semibold text-xl text-[#23a6f0]">Practice Advice</p>
                <h3 className="font-bold text-5xl text-[#252b42] w-[15rem] text-center">Featured Products</h3>
                <p className="text-light font-semibold text-[#737373] w-[20rem] text-center">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="flex flex-col shadow-md">
                {post.map((elm, index) => {
                    return (
                        <div key={index} className={`${index >= 3 ? "hidden lg:block" : "lg:hidden"} flex flex-col items-center gap-4`}>
                            <div className="flex relative w-80 h-80">
                                <img className="object-cover w-full h-full" src={elm} alt="" />
                                <p className="absolute text-white font-bold bg-red-500 px-4 py-2 rounded mt-6 ml-6">NEW</p>

                            </div>
                            <div className="flex flex-col w-80 h-80 items-start px-6 gap-4">
                                <div className="flex flex-row gap-4 text-left">
                                    <p className="text-[#23a6f0] font-semibold">Google</p>
                                    <p className="text-[#737373] font-semibold">Trending</p>
                                    <p className="text-[#737373] font-semibold">New</p>
                                </div>
                                <p className="text-[#252b42] font-semibold text-2xl">Loudest à la Madison #1 (L'integral)</p>
                                <p className="text-[#737373] font-semibold" >We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                <div className="flex flex-row gap-8">
                                    <div className="flex flex-row gap-2">
                                        <AlarmClock className="text-[#23a6f0]" />
                                        <p className="text-[#737373] font-semibold text-sm">22 April 2025</p>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <ChartArea className="text-[#23856d]" />
                                        <p className="text-[#737373] font-semibold text-sm">10 Comments</p>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <p className="text-[#737373] font-semibold">Learn More </p>
                                    <ChevronRight className="text-[#23a6f0]" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}