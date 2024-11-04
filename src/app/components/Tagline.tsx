// @ts-nocheck
// components/Tagline.js

import { FaClock, FaMapPin, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaPhone } from "react-icons/fa";

const Tagline = () => {
    return (
        <div className="tagline bg-slate-900">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="flex items-center justify-between">
                        {/* Left Section */}
                        <ul className="list-none">
                            <li className="inline-flex items-center">
                                <FaClock className="text-red-500 size-4" />
                                <span className="ms-2 text-slate-300">Mon-Sat: 9am to 6pm</span>
                            </li>
                            <li className="inline-flex items-center ms-2">
                                <FaMapPin className="text-red-500 size-4" />
                                <span className="ms-2 text-slate-300">Houston, USA 485</span>
                            </li>
                        </ul>

                        {/* Right Section */}
                        <ul className="list-none">
                            <li className="inline-flex items-center">
                                <FaEnvelope className="text-red-500 size-4" />
                                <a href="mailto:contact@example.com" className="ms-2 text-slate-300 hover:text-slate-200">
                                    contact@example.com
                                </a>
                            </li>
                            <li className="inline-flex items-center ms-2">
                                <ul className="list-none">
                                    <li className="inline-flex mb-0">
                                        <a href="#!" className="text-slate-300 hover:text-red-500">
                                            <FaFacebook className="size-4 align-middle" title="facebook" />
                                        </a>
                                    </li>
                                    <li className="inline-flex ms-2 mb-0">
                                        <a href="#!" className="text-slate-300 hover:text-red-500">
                                            <FaInstagram className="size-4 align-middle" title="instagram" />
                                        </a>
                                    </li>
                                    <li className="inline-flex ms-2 mb-0">
                                        <a href="#!" className="text-slate-300 hover:text-red-500">
                                            <FaTwitter className="size-4 align-middle" title="twitter" />
                                        </a>
                                    </li>
                                    <li className="inline-flex ms-2 mb-0">
                                        <a href="tel:+152534-468-854" className="text-slate-300 hover:text-red-500">
                                            <FaPhone className="size-4 align-middle" title="phone" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tagline;
