import React, { useState } from 'react';

const AUProcessing = () => {
    const [selectedProcessing, setSelectedProcessing] = useState("FirstStep");

    return (
        <section className='mb-5'>
            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5 mb-2'>
                <h3 className='font-bold'>পেমেন্ট:</h3>
                <div className="flex items-center space-x-4">
                    {/* Segmented Control for FirstStep and SecondStep */}
                    <div className="flex flex-wrap gap-2 md:flex-row w-full md:w-auto border rounded-md p-2 overflow-hidden bg-white">
                        <button
                            onClick={() => setSelectedProcessing("FirstStep")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedProcessing === "FirstStep"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4 rounded-full ${selectedProcessing === "FirstStep" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>১ম ধাপ</span>

                        </button>
                        <button
                            onClick={() => setSelectedProcessing("SecondStep")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedProcessing === "SecondStep"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedProcessing === "SecondStep" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>২য় ধাপ</span>
                        </button>
                        <button
                            onClick={() => setSelectedProcessing("ThirdStep")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedProcessing === "ThirdStep"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedProcessing === "ThirdStep" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>৩য় ধাপ</span>
                        </button>
                    </div>
                </div>
            </div>
            {
                selectedProcessing == "FirstStep" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.864 3.144a.516.516 0 0 0-.716 0a.485.485 0 0 0 0 .698a4.386 4.386 0 0 1 0 6.316a.485.485 0 0 0 0 .698a.516.516 0 0 0 .716 0a5.355 5.355 0 0 0 0-7.712m-2.02 1.004a.486.486 0 0 0-.7 0a.515.515 0 0 0 0 .716a3.07 3.07 0 0 1 0 4.27a.515.515 0 0 0 0 .716a.486.486 0 0 0 .7 0c1.536-1.575 1.536-4.127 0-5.702M5.138 6.153a.444.444 0 0 1 .671 0c.925 1.02.925 2.674 0 3.694a.444.444 0 0 1-.67 0a.56.56 0 0 1 0-.741a1.68 1.68 0 0 0 0-2.212a.56.56 0 0 1 0-.741" /></svg>
                            </div>
                            <h3 className='font-bold'>
                                প্রথমেই ৫০ হাজার টাকা বুকিং মানি অগ্রিম প্রদান করতে হবে
                            </h3>
                        </div>
                    </div>
                </>
            }
            {
                selectedProcessing == "SecondStep" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.864 3.144a.516.516 0 0 0-.716 0a.485.485 0 0 0 0 .698a4.386 4.386 0 0 1 0 6.316a.485.485 0 0 0 0 .698a.516.516 0 0 0 .716 0a5.355 5.355 0 0 0 0-7.712m-2.02 1.004a.486.486 0 0 0-.7 0a.515.515 0 0 0 0 .716a3.07 3.07 0 0 1 0 4.27a.515.515 0 0 0 0 .716a.486.486 0 0 0 .7 0c1.536-1.575 1.536-4.127 0-5.702M5.138 6.153a.444.444 0 0 1 .671 0c.925 1.02.925 2.674 0 3.694a.444.444 0 0 1-.67 0a.56.56 0 0 1 0-.741a1.68 1.68 0 0 0 0-2.212a.56.56 0 0 1 0-.741" /></svg>
                            </div>
                            <h3 className='font-bold'>
                                ওমরাহ ভিসা, এয়ার টিকিট এর PNR বুঝে পেয়ে ১ লক্ষ টাকা পরিশোধ করতে হবে
                            </h3>
                        </div>
                    </div>
                </>
            }
            {
                selectedProcessing == "ThirdStep" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.864 3.144a.516.516 0 0 0-.716 0a.485.485 0 0 0 0 .698a4.386 4.386 0 0 1 0 6.316a.485.485 0 0 0 0 .698a.516.516 0 0 0 .716 0a5.355 5.355 0 0 0 0-7.712m-2.02 1.004a.486.486 0 0 0-.7 0a.515.515 0 0 0 0 .716a3.07 3.07 0 0 1 0 4.27a.515.515 0 0 0 0 .716a.486.486 0 0 0 .7 0c1.536-1.575 1.536-4.127 0-5.702M5.138 6.153a.444.444 0 0 1 .671 0c.925 1.02.925 2.674 0 3.694a.444.444 0 0 1-.67 0a.56.56 0 0 1 0-.741a1.68 1.68 0 0 0 0-2.212a.56.56 0 0 1 0-.741" /></svg>
                            </div>
                            <h3 className='font-bold'>
                                মিশরের এপ্রুভাল এবং টিকেট বুঝে পেয়ে বাকি টাকা পরিশোধ করতে হবে
                            </h3>
                        </div>
                    </div>
                </>
            }
        </section>
    );
};

export default AUProcessing;