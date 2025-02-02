"use client"
import React, { useState } from 'react';
import UEPrice from './UEComponents/UEPrice';
import UEPlace from './UEComponents/UEPlace';
import UEHotel from './UEComponents/UEHotel';
import UEAir from './UEComponents/UEAir';
import UEINI from './UEComponents/UEINI';

const UEContent = () => {
    // Manage selected pricing plan: "Basic" or "Premium"


    return (
        <section className="py-10 md:py-20  text-gray-800 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary  mb-8">
                    ওমরাহ ও মিশর প্যাকেজ
                </h2>
                {/* Egypt Itinery */}
                <UEPrice></UEPrice>
                <UEPlace></UEPlace>
                <UEHotel></UEHotel>
                <UEAir></UEAir>
                <UEINI></UEINI>

                {/* Package Includes */}
                {/* <div className="mb-8">
                   
                    <ul className=" gap-1 grid grid-cols-5">
                        
                        <li className='bg-white p-5 rounded-lg shadow-sm flex flex-col gap-2'> <div><Icon icon={"material-symbols:circle-outline"}></Icon> </div>সম্পূর্ণ ট্রান্সপোর্ট সেবা ( মিশরে ৫ দিনের জন্য রিজার্ভ বাস থাকবে )</li>
                        <li className='bg-white p-5 rounded-lg shadow-sm flex flex-col gap-2'> <div><Icon icon={"material-symbols:circle-outline"}></Icon> </div>মক্কা ও মদিনায় দেশীয় খাবার</li>
                        <li className='bg-white p-5 rounded-lg shadow-sm flex flex-col gap-2'> <div><Icon icon={"material-symbols:circle-outline"}></Icon> </div>মিশরে ২ বেলা দেশীয় খাবার এবং নাস্তা (সকাল ও দুপুর)</li>
                        <li className='bg-white p-5 rounded-lg shadow-sm flex flex-col gap-2'> <div><Icon icon={"material-symbols:circle-outline"}></Icon> </div>মিশরে ৩ তারকা হোটেল ( ৪ জন এক রুমে)</li>
                        
                    </ul>
                </div> */}


            </div>
        </section>
    );
};

export default UEContent;