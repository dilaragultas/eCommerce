export default function C2A() {
    return (
        <div className="flex flex-col justify-center py-20 lg:flex-row lg:justify-around lg:flex-row-reverse">
            <div className="flex flex-col justify-center items-center text-center gap-4 lg:text-left lg:items-start lg:w-[40vw] lg:gap-6">
                <p className="text-2xl text-[#bdbdbd] font-semibold">SUMMER 2025</p>
                <h2 className="text-4xl text=[#252b42] font-bold w-[15rem] lg:w-[25rem]">Part of the Neutral Universe</h2>
                <p className="text-[#737373] font-semibold text-2xl w-[18rem] lg:w-[25rem] lg:font-normal">We know how large objects will act, but things on a small scale.</p>
                <div className="flex flex-col gap-4 lg:flex-row">
                    <button className="w-40 h-10 bg-[#23a6f0] text-white font-semibold text-xl rounded lg:bg-green-500 lg:hover:bg-green-600 lg:transition">BUY NOW</button>
                    <button className="border-2 border-[#23a6f0] w-40 h-10 font-semibold text-xl rounded text-[#23a6f0] lg:bg-white lg:text-[#00c951] lg:border-[#00c951]">READ MORE</button>
                </div>
            </div>
            <img src="/assets/c2a.png" alt="" className="lg:object-contain lg:w-[40vw]" />
        </div>
    )
}