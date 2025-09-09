export default function EditorsPick() {
    return (
        <div className="flex flex-col justify-center items-center bg-[#fafafa]">
            <div className="flex flex-col text-center gap-4 mt-10">
                <h3 className="text-2xl font-bold text-[#252b42]">EDITOR'S PICK</h3>
                <p className="text-[#838383] text-xl ml-15 mr-15">Problems trying to resolve the conflict between</p>
            </div>
            <div className="flex flex-col justify-center gap-6 mt-6 lg:flex-row lg:h-100">
                <div className="relative flex lg:flex-1 justify-start">
                    <img src="/assets/editorspic1.jpg" alt="MEN" />
                    <button className="absolute bottom-4 bg-white w-30 h-10 ml-5 text-2xl font-bold ">MEN</button>
                </div>
                <div className="relative flex justify-start">
                    <img src="/assets/editorspic2.jpg" alt="WOMEN" />
                    <button className="absolute bottom-4 bg-white w-30 h-10 ml-5 text-2xl font-bold ">WOMEN</button>
                </div>

                <div className="flex flex-col justify-center gap-6 ">
                    <div className="relative flex justify-start lg:h-47">
                        <img src="/assets/editorspic3.jpg" alt="ACCESSORIES" />
                        <button className="absolute bottom-4 bg-white w-20 h-6 ml-5 text-[0.7rem] font-bold ">ACCESSORIES</button>
                    </div>
                    <div className="relative flex justify-start lg:h-47 ">
                        <img src="/assets/editorspic4.jpg" alt="KIDS" />
                        <button className="absolute bottom-4 bg-white w-15 h-5 ml-5 text-sm font-bold ">KIDS</button>
                    </div>
                </div>

            </div>
        </div>
    )
}