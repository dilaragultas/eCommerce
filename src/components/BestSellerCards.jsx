import { DotIcon } from "lucide-react"

export default function BestSellerCard() {
    const products = [
        "/assets/bestseller1.jpg",
        "/assets/bestseller2.jpg",
        "/assets/bestseller3.jpg",
        "/assets/bestseller4.jpg",
        "/assets/bestseller5.jpg",
        "/assets/bestseller6.jpg",
        "/assets/bestseller7.jpg",
        "/assets/bestseller8.jpg"
    ]

    return (
        <div className="flex flex-col justify-center py-20">
            <div className="flex flex-col justify-center text-center gap-2 mt-10">
                <p className="font-semibold text-m text-[#737373] lg:text-xl">Featured Products</p>
                <h2 className="font-bold text-xl text-[#252b42] lg:text-2xl">BESTSELLER PRODUCTS</h2>
                <p className="text-sm text-[#737373] font-semibold">Problems trying to resolve the conflict between</p>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 justify-center items-center">
                {products.map((elm, index) => {
                    return (
                        <div key={index} className="text-center">
                            <img src={elm} alt={`Product ${index + 1}`} />
                            <h3 className="text-[#252b42] font-bold mt-3">Graphic Design</h3>
                            <p className="text-[#737373] font-semibold mt-3">English Department</p>
                            <div>
                                <p className="font-bold text-[#d2d2d2] mt-3">$16.48 <span className="text-[#23856d]">$6.48</span></p>
                            </div>
                            <div className="flex flex-row justify-center mt-3 gap-1">
                                <p className="bg-blue-500 w-4 h-4 rounded-full"></p>
                                <p className="bg-green-500 w-4 h-4 rounded-full"></p>
                                <p className="bg-orange-500 w-4 h-4 rounded-full"></p>
                                <p className="bg-[#252b42] w-4 h-4 rounded-full"></p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}