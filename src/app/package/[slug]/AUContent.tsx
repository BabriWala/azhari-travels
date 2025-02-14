"use client"
import React, { useState } from 'react';
import AUPrice from './AUComponents/AUPrice';
import AUTimeItinery from './AUComponents/AUTimeItinery';
import AUPlace from './AUComponents/AUPlace';
import AUHotel from './AUComponents/AUHotel';
import AULunch from './AUComponents/AULunch';
import AUTravel from './AUComponents/AUTravel';
import AUAir from './AUComponents/AUAir';
import AUINI from './AUComponents/AUINI';
import AUProcessing from './AUComponents/AUProcessing';


const AUContent = () => {
    return (
        <section className="py-10 md:py-20  text-gray-800 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary  mb-8">
                    স্টুডেন্ট প্যাকেজ
                    <br />
                    <span className='text-xl font-normal'>পাশাপাশি ট্যাব গুলো ক্লিক করে অন্যান্য তথ্য দেখুন</span>
                </h2>
                {/* Hotel Demo Picture */}
                {/* Egypt Itinery */}
                {/* Terms & Conditions */}
                {/* Money Receit */}
                <AUPrice></AUPrice>
                <AUINI></AUINI>
                <AUTimeItinery></AUTimeItinery>
                <AUProcessing></AUProcessing>
                {/* <p className=' text-center pt-5 font-bold'>
                   আপনার সচারচর জিজ্ঞাসা
                </p> */}
                {/* <AUPlace></AUPlace>
                <AUHotel></AUHotel>
                <AULunch></AULunch>
                <AUTravel></AUTravel>
                <AUAir></AUAir>
                 */}
                <p className=' text-center pt-10 font-bold'>
                    আল্লাহ আপনার সফরে বরকত দান করুক - আমিন
                    <br />
                    আযহারী ট্রাভেলসের সাথেই থাকুন
                </p>
            </div>
        </section>
    );
};

export default AUContent;