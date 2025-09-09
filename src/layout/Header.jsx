import { Facebook, Heart, Instagram, Mail, Menu, Phone, Search, ShoppingBasketIcon, Twitter, User, X, YoutubeIcon } from "lucide-react";
import { useState } from "react";



export default function Header() {

    const [open, setOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <>

            <div className="bg-[#252b42] max-lg:hidden">
                <div className="flex flex-row text-white justify-between items-center h-[8vh] px-4">
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-2">
                            <Phone />
                            <p>+90 123 456 78 99</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Mail />
                            <p>dilaragultas@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <p>Follow Us and get a chance to win %80 off</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <p>Follow Us : </p>
                        <Instagram />
                        <YoutubeIcon />
                        <Facebook />
                        <Twitter />
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between px-4 my-4 w-[98vw]">
                <p className="font-bold text-2xl text-[#252b42]">Bandage</p>
                <nav className="max-lg:hidden flex flex-row gap-4">
                    <a href="" className="text-[#737373]">Home</a>
                    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                        <button>Shop</button>
                        {open && (
                            <div className="absolute flex flex-row gap-40 z-50 bg-white">
                                <div>
                                    <h7 className="text-[#252b42] font-bold">Kadın</h7>
                                    <ul className="p-0">
                                        <li><a href="" className="">Bags</a></li>
                                        <li><a href="">Belts</a></li>
                                        <li><a href="">Cosmetics</a></li>
                                        <li><a href="">Hats</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h7 className="text-[#252b42] font-bold">Erkek</h7>
                                    <ul className="p-0">
                                        <li><a href="">Bags</a></li>
                                        <li><a href="">Belts</a></li>
                                        <li><a href="">Cosmetics</a></li>
                                        <li><a href="">Hats</a></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                    <a href="">Pages</a>
                </nav>
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex flex-row gap-1">
                        <a href=""><User className="text-[#252b42] lg:text-[#23a6f0]" /></a>
                        <a className="max-lg:hidden" href="">Login/Register</a>
                    </div>
                    <a href=""><Search className="text-[#252b42] lg:text-[#23a6f0]" /></a>
                    <a href=""><ShoppingBasketIcon className="text-[#252b42] lg:text-[#23a6f0]" /></a>
                    <a className="max-lg:hidden" href=""><Heart className="text-[#23a6f0]" /></a>
                    <button className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X /> : <Menu />
                    }</button>
                </div>
            </div>

            {mobileMenu && (
                <div className="flex flex-col items-center py-10 space-y-6">
                    <a href="#" className="text-[#737373] no-underline text-2xl">Home</a>
                    <a href="#" className="text-[#737373] no-underline font-semibold text-2xl">Product</a>
                    <a href="#" className="text-[#737373] no-underline font-semibold text-2xl">Pricing</a>
                    <a href="#" className="text-[#737373] no-underline font-semibold text-2xl">Contact</a>
                </div>

            )}


        </>
    )
}