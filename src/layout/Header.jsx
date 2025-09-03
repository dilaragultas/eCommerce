import { Facebook, Heart, Instagram, Mail, Phone, Search, ShoppingBasketIcon, Twitter, User, YoutubeIcon } from "lucide-react";
import { useState } from "react";



export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <div>
                    <div>
                        <Phone />
                        <p>(+90) 123 456 7899</p>
                    </div>
                    <div>
                        <Mail />
                        <p>dilaragultas@gmail.com</p>
                    </div>
                    <div>
                        <p>Follow Us and get a chance to win %80 off</p>
                    </div>
                    <div>
                        <p>Follow Us</p>
                        <Instagram />
                        <YoutubeIcon />
                        <Facebook />
                        <Twitter />
                    </div>
                </div>

                <div>
                    <p>Bandage</p>
                    <nav>
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
                    <div>
                        <div>
                            <User />
                            <a href="">Login/Register</a>
                        </div>
                        <a href=""><Search /></a>
                        <a href=""><ShoppingBasketIcon /></a>
                        <a href=""><Heart /></a>
                    </div>
                </div>
            </div>



        </>
    )
}