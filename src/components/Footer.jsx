import React from "react";
import FooterLogo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="container mx-auto px-5 py-5 mt-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="col-span-2 md:col-span-1">
                    <img src={FooterLogo} alt="Dev Stack" />

                    <p className="text-[#64748B] py-3 max-w-sm">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>

                    <ul className="flex flex-wrap gap-4 mt-5">
                        <li>
                            <a
                                className="hover:text-[#DB2777] font-semibold cursor-pointer"
                                href="#"
                            >
                                Github
                            </a>
                        </li>

                        <li>
                            <a
                                className="hover:text-[#DB2777] font-semibold cursor-pointer"
                                href="#"
                            >
                                Twitter
                            </a>
                        </li>

                        <li>
                            <a
                                className="hover:text-[#DB2777] font-semibold cursor-pointer"
                                href="#"
                            >
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold py-3 uppercase">Product</h3>

                    <ul className="space-y-2">
                        <li className="text-[#64748B] hover:text-[#DB2777] cursor-pointer">
                            Home
                        </li>
                        <li className="text-[#64748B] hover:text-[#DB2777] cursor-pointer">
                            Technologies
                        </li>
                        <li className="text-[#64748B] hover:text-[#DB2777] cursor-pointer">
                            Projects
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold py-3 uppercase">Company</h3>

                    <ul className="space-y-2">
                        <li className="text-[#64748B] hover:text-[#DB2777] cursor-pointer">
                            About
                        </li>
                        <li className="text-[#64748B] hover:text-[#DB2777] cursor-pointer">
                            Contact
                        </li>
                        <li className="text-[#64748B] hover:text-[#DB2777] cursor-pointer">
                            Careers
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold py-3 uppercase">Legal</h3>

                    <ul className="space-y-2">
                        <li className="text-[#64748B] hover:text-[#DB2777] cursor-pointer">
                            Privacy Policy
                        </li>
                        <li className="text-[#64748B] hover:text-[#DB2777] cursor-pointer">
                            Terms of Services
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="mt-8 border-gray-100" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-3 my-5 text-center md:text-left">
                <p className="text-[#64748B]">© 2026 Dev Stack. All rights reserved.</p>

                <div className="flex gap-4">
                    <p className="text-[#64748B] hover:text-[#DB2777] cursor-pointer">
                        Privacy
                    </p>

                    <p className="text-[#64748B] hover:text-[#DB2777] cursor-pointer">
                        Terms
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;