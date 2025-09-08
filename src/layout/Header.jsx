import { Facebook, Heart, Instagram, Mail, Menu, Phone, Search, ShoppingBasketIcon, Twitter, User, X, YoutubeIcon } from "lucide-react";
import { useState } from "react";



export default function Header() {

    const [open, setOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <>

            <div className="bg-[#252b42] max-lg:hidden">
                <div className="flex flex-row text-white justify-between items-center h-[8vh]">
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row ">
                            <Phone />
                            <p className="mb-0">+90 123 456 78 99</p>
                        </div>
                        <div className="flex flex-row ">
                            <Mail />
                            <p className="mb-0">dilaragultas@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-0">Follow Us and get a chance to win %80 off</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="mb-0">Follow Us</p>
                        <Instagram />
                        <YoutubeIcon />
                        <Facebook />
                        <Twitter />
                    </div>
                </div>
            </div>

            <div className="flex flex-row w-screen justify-between px-4 my-4">
                <p className="mb-0 font-bold text-2xl text-[#252b42]">Bandage</p>
                <nav className="max-lg:hidden">
                    <a href="">Home</a>
                    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                        <button>Shop</button>
                        {open && (
                            <>
                                <div>
                                    <h3>Kadin</h3>
                                    <ul>
                                        <li><a href="">Bags</a></li>
                                        <li><a href="">Belts</a></li>
                                        <li><a href="">Cosmetics</a></li>
                                        <li><a href="">Hats</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Erkek</h3>
                                    <ul>
                                        <li><a href="">Bags</a></li>
                                        <li><a href="">Belts</a></li>
                                        <li><a href="">Cosmetics</a></li>
                                        <li><a href="">Hats</a></li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                    <a href="">Pages</a>
                </nav>
                <div className="flex flex-row gap-4 items-center">
                    <div>
                        <a href=""><User className="text-[#252b42]" /></a>
                        <a className="max-lg:hidden" href="">Login/Register</a>
                    </div>
                    <a href=""><Search className="text-[#252b42]" /></a>
                    <a href=""><ShoppingBasketIcon className="text-[#252b42]" /></a>
                    <a className="max-lg:hidden" href=""><Heart /></a>
                    <button onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X /> : <Menu />
                    }</button>
                </div>
            </div>

            {mobileMenu && (
                <div className="flex flex-col items-center font-bold">
                    <a className="no-underline text-[#737373]" href="">Home</a>
                    <a className="text-[#737373]" href="">Products</a>
                    <a href="">Pricing</a>
                    <a href="">Contact</a>
                </div>
            )}


        </>
    )
}