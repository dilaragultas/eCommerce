import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (

        <>
            <div className="flex flex-col gap-10 py-20 pl-10">
                <h3 className="font-bold text-[#252b42] text-3xl">Bandage</h3>
                <div className="flex flex-row gap-4 text-[#23a6f0]">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-row">
                    <div className="flex flex-col gap-8">
                        <h5 className="font-bold text-[#252b42] text-2xl">Company Info</h5>
                        <ul className="flex flex-col gap-2 text-[#737373] font-semibold text-normal">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                        <h5 className="font-bold text-[#252b42] text-2xl">Legal</h5>
                        <ul className="flex flex-col gap-2 text-[#737373] font-semibold text-normal">
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                        <h5 className="font-bold text-[#252b42] text-2xl">Features</h5>
                        <ul className="flex flex-col gap-2 text-[#737373] font-semibold text-normal ">
                            <li>Business Marketing</li>
                            <li>User Analityc</li>
                            <li>Live Chat</li>
                            <li>Unlimited Support</li>
                        </ul>
                        <h5 className="font-bold text-[#252b42] text-2xl">Resources</h5>
                        <ul className="flex flex-col gap-2 text-[#737373] font-semibold text-normal">
                            <li>IOS % Android</li>
                            <li>Watch a demo</li>
                            <li>Customers</li>
                            <li>API</li>
                        </ul>

                        <h5 className="font-bold text-[#252b42] text-2xl">Get In Touch</h5>
                        <div className="flex flex-row">
                            <input type="text" placeholder="Your Email" className="rounded-l-md bg-[#F5F5F5] text-black border border-[#DADADA] p-2" />
                            <button className="bg-[#23A6F0] py-4 px-6 border border-[#DADADA] rounded-r-md text-white">Subscribe</button>
                        </div>
                        <p className="text-[#737373] font-normal">Lore imp sum dolor Amit</p>

                    </div>
                </div>
                <p className="flex text-[#737373] text-center w-[17rem] px-10 font-semibold mt-4">Made With Love By Finland All Right Reserved</p>
            </div>
        </>
    )
}