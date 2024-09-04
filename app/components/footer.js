"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";


export default function Footer() {


    const handleLinkClickFb = () => {
        const url = `${''}`; // Define your URL here
        window.open(url, "_blank");
    };
    const handleLinkClickWhats = () => {
        const url = `${''}`; // Define your URL here
        window.open(url, "_blank");
    };
    const handleLinkClickYou = () => {
        const url = `${''}`; // Define your URL here
        window.open(url, "_blank");
    };

    const handleLinkClickInsta = () => {
        const url = `${''}`; // Define your URL here
        window.open(url, "_blank");
    };





    return (
        <div className="bg-[#E2E8F0] ">
            <div className="max-w-7xl mx-auto bg-[#E2E8F0]  px-4 pt-14 pb-20 xls:pb-[90px] xms:pb-[90px] xs:pb-[90px]">

                <div className="grid grid-cols-6 sm:grid-cols-6 xls:grid-cols-1 xms:grid-cols-1 xs:grid-cols-1 gap-12 xls:gap-6 xms:gap-6 xs:gap-6 ">
                    <div className="col-span-3">
                        <div className="mt-4 xls:mt-2 xms:mt-2 xs:mt-2 text-white">
                            <div>
                                <h2 className="text-[35px] text-gray-600">Lets keep in touch!</h2>

                            </div>
                            <div className="text-sm text-gray-600 mb-2">

                                Call:{" "}
                                <span className="font-semibold text-gray-600">01728897264</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                                Email:{" "}
                                <span className="font-semibold underline text-gray-600">
                                    kkhnishad@gmail.com
                                </span>
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                                Address:{" "}
                                <span className="font-semibold  text-gray-600">
                                    Vill : Baniara, Union : Jamurki, Thana : Mirzapur, Dis: Tangail
                                </span>
                            </div>
                        </div>
                        <div className="flex space-x-2 items-center mt-5">

                            <div
                                onClick={() => handleLinkClickFb()}
                                className="bg-secondary h-7 w-7 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <FaFacebook className="text-gray-600" />
                            </div>


                            <div
                                onClick={() => handleLinkClickYou()}
                                className="bg-secondary h-7 w-7 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <FaYoutube className="text-gray-600" />
                            </div>


                            <div
                                onClick={() => handleLinkClickWhats()}
                                className="bg-secondary h-7 w-7 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <FaWhatsapp className="text-gray-600" />
                            </div>
                            <div
                                onClick={() => handleLinkClickInsta()}
                                className="bg-secondary h-7 w-7 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <FaInstagram className="text-gray-600" />
                            </div>

                        </div>
                    </div>
                    {/* <div className="col-span-2"></div>
                    <div className="col-span-1">
                        <p className="text-secondary font-semibold">About Us</p>

                        <ul className="mt-4 xls:mt-2 xms:mt-2 xs:mt-2 space-y-3">
                            <li>
                                <Link
                                    href="/users/login"
                                    className="text-sm font-semibold text-gray-600 hover:text-secondary duration-300 cursor-pointer"
                                >
                                   Blogs
                                </Link>
                            </li>
                            <li>
                                {" "}
                                <Link
                                    href="/users/register"
                                    className="text-sm font-semibold text-gray-600 hover:text-secondary duration-300 cursor-pointer"
                                >
                                    Notifications
                                </Link>
                            </li>
                            <li>
                                {" "}
                                <Link
                                    href="/users/register"
                                    className="text-sm font-semibold text-gray-600 hover:text-secondary duration-300 cursor-pointer"
                                >
                                    News
                                </Link>
                            </li>
                            <li>
                                {" "}
                                <Link
                                    href="/users/register"
                                    className="text-sm font-semibold text-gray-600 hover:text-secondary duration-300 cursor-pointer"
                                >
                                    Visit Us
                                </Link>
                            </li>

                        </ul>
                    </div> */}

                </div>

            </div>
            <div className="xls:pb-16 xms:pb-16 xs:pb-16   text-center max-w-7xl mx-auto border-t-2 border-gray-700 py-4">
                <p className="text-gray-600 text-[12px]">
                    OFFICIAL WEBSITE OF BANIARA &copy; 2024 POWERED BY
                    <span
                        onClick={() => window.open("https://www.facebook.com/kh.nishad.9/", "_blank")}
                        className="text-primary font-semibold text-[14px] cursor-pointer"
                    >
                        {" "}
                        KHANDAKER NISHAD
                    </span>
                </p>
            </div>
        </div>
    );
}
