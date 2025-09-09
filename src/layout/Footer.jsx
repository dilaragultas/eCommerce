import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-10 py-20">
                <h3 className="font-bold text-[#252b42] text-3xl">Bandage</h3>
                <div className="flex flex-row gap-4">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col gap-8">
                    <h5 className="font-bold text-[#252b42] text-2xl">Company Info</h5>
                    <ul className="text-[#737373] font-semibold text-normal">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                    <h5 className="font-bold text-[#252b42] text-2xl">Legal
                        <ul className="text-[#737373] font-semibold text-normal">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </h5>
                    <h5 className="font-bold text-[#252b42] text-2xl">Features
                        <ul className="text-[#737373] font-semibold text-normal ">
                            <li>Business Marketing</li>
                            <li>User Analityc</li>
                            <li>Live Chat</li>
                            <li>Unlimited Support</li>
                        </ul>
                    </h5>
                    <h5 className="font-bold text-[#252b42] text-2xl">Resources
                        <ul className="text-[#737373] font-semibold text-normal ">
                            <li>IOS % Android</li>
                            <li>Watch a demo</li>
                            <li>Customers</li>
                            <li>API</li>
                        </ul>
                    </h5>
                    <h5 className="font-bold text-[#252b42] text-2xl">Get In Touch
                        <button></button>
                        <p>Lore imp sum dolor Amit</p>
                    </h5>
                </div>
            </div>
            <p>Made With Love By Finland All Right Reserved</p>
        </div>
    )
}