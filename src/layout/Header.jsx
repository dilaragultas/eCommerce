import { Facebook, Instagram, Mail, Phone, Twitter, YoutubeIcon } from "lucide-react";



export default function Header() {
    return (
        <>
            <div>
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
                </div>

                <div>

                </div>

                <div>

                </div>

            </div>
        </>
    )
}