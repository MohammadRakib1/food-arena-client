import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#111827] text-gray-300">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-10">

                {/* Contact Us */}
                <div className="text-center md:text-center">
                    <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="mt-1">+88 123456789</p>
                    <p className="mt-2">Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>

                {/* Follow Us */}
                <div className="text-center md:text-center">
                    <h2 className="text-lg font-semibold mb-4">Follow US</h2>
                    <p className="mb-4">Join us on social media</p>
                    <div className="flex justify-center md:justify-center gap-6 text-xl">
                        <a href="#" className="hover:text-white">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-white">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-white">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-black text-center py-3 text-sm text-gray-400">
                Copyright © CulinaryCloud. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;