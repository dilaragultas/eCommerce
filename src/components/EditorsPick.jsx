export default function EditorsPick() {
    return (
        <div>
            <div className="flex flex-col text-center gap-4 mt-10">
                <h3 className="text-2xl font-bold text-[#252b42]">EDITORS'S PICK</h3>
                <p className="text-[#838383] text-xl ml-15 mr-15">Problems trying to resolve the conflict between</p>
            </div>
            <div className="flex flex-col gap-6 mt-6 ml-10 mr-10">
                <div className="relative flex">
                    <img src="/assets/editorspic1.jpg" alt="MEN" />
                    <button className="absolute bottom-4 bg-white w-30 h-10 text-sm font-bold ">MEN</button>
                </div>
                <div className="relative flex">
                    <img src="/assets/editorspic2.jpg" alt="WOMEN" />
                    <button className="absolute bottom-4 bg-white w-30 h-10 text-sm font-bold ">WOMEN</button>
                </div>
                <div className="flex flex-col gap-6 mt-6 ml-10 mr-10">
                    <div className="relative flex">
                        <img src="/assets/editorspic3.jpg" alt="ACCESSORIES" />
                        <button className="absolute bottom-4 bg-white w-30 h-10 text-sm font-bold ">ACCESSORIES</button>
                    </div>
                    <div className="relative flex">
                        <img src="/assets/editorspic4.jpg" alt="KIDS" />
                        <button className="absolute bottom-4 bg-white w-30 h-10 text-sm font-bold ">KIDS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}