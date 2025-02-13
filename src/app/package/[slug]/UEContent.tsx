"use client"
import React, { useState } from 'react';
import UEPrice from './UEComponents/UEPrice';
import UEPlace from './UEComponents/UEPlace';
import UEHotel from './UEComponents/UEHotel';
import UEAir from './UEComponents/UEAir';
import UEINI from './UEComponents/UEINI';
import UELunch from './UEComponents/UELunch';
import UETravel from './UEComponents/UETravel';
import UEProcessing from './UEComponents/UEProcessing';
import UETimeItinery from './UEComponents/UETimeItinery';

const UEContent = () => {
    return (
        <section className="py-10 md:py-20  text-gray-800 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary  mb-8">
                    ওমরাহ ও মিশর প্যাকেজ
                    <br />
                    <span className='text-xl font-normal'>পাশাপাশি ট্যাব গুলো ক্লিক করে অন্যান্য তথ্য দেখুন</span>
                </h2>
                {/* Hotel Demo Picture */}
                {/* Egypt Itinery */}
                {/* Terms & Conditions */}
                {/* Money Receit */}
                <UEPrice></UEPrice>
                <UETimeItinery></UETimeItinery>
                <UEPlace></UEPlace>
                <UEHotel></UEHotel>
                <UELunch></UELunch>
                <UETravel></UETravel>
                <UEAir></UEAir>
                <UEINI></UEINI>
                <UEProcessing></UEProcessing>
                <p className=' text-center pt-10 font-bold'>
                    আল্লাহ আপনার সফরে বরকত দান করুক - আমিন
                    <br />
                    আযহারী ট্রাভেলসের সাথেই থাকুন
                </p>
            </div>
        </section>
    );
};

export default UEContent;