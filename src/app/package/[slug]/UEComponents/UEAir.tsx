import React, { useState } from 'react';

const UEAir = () => {
    const [selectedAir, setSelectedAir] = useState("Egypt");

    return (
        <section className='mb-5'>
            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5 mb-2'>
                <h3 className='font-bold'>এয়ার:</h3>
                <div className="flex items-center space-x-4">
                    {/* Segmented Control for Egypt and Makkah */}
                    <div className="flex flex-wrap gap-2 md:flex-row w-full md:w-auto border rounded-md p-2 overflow-hidden bg-white">
                        <button
                            onClick={() => setSelectedAir("Egypt")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedAir === "Egypt"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4 rounded-full ${selectedAir === "Egypt" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মিশর</span>

                        </button>
                        <button
                            onClick={() => setSelectedAir("Makkah")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedAir === "Makkah"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedAir === "Makkah" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মক্কা</span>
                        </button>
                        <button
                            onClick={() => setSelectedAir("Madinah")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedAir === "Madinah"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedAir === "Madinah" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মদিনা</span>
                        </button>
                    </div>
                </div>
            </div>
            {
                selectedAir == "Egypt" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="currentColor" d="M35.77 8.16a2.43 2.43 0 0 0-1.9-2L28 4.87a4.5 4.5 0 0 0-3.65.79L7 18.3l-4.86-.2a1.86 1.86 0 0 0-1.23 3.31l5 3.93c.6.73 1 .59 10.93-4.82l.93 9.42a1.36 1.36 0 0 0 .85 1.18a1.4 1.4 0 0 0 .54.1a1.54 1.54 0 0 0 1-.41l2.39-2.18a1.52 1.52 0 0 0 .46-.83l2.19-11.9c3.57-2 6.95-3.88 9.36-5.25a2.43 2.43 0 0 0 1.21-2.49m-2.2.75c-2.5 1.42-6 3.41-9.76 5.47l-.41.23l-2.33 12.67l-1.47 1.34l-1.1-11.3l-1.33.68C10 22 7.61 23.16 6.79 23.52l-4.3-3.41l5.08.22l18-13.06a2.5 2.5 0 0 1 2-.45l5.85 1.26a.43.43 0 0 1 .35.37a.42.42 0 0 1-.2.46" className="clr-i-outline clr-i-outline-path-1" /><path fill="currentColor" d="m7 12.54l3.56 1l1.64-1.19l-4-1.16l1.8-1.1l5.47-.16l2.3-1.67L10 8.5a1.25 1.25 0 0 0-.7.17L6.67 10.2A1.28 1.28 0 0 0 7 12.54" className="clr-i-outline clr-i-outline-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                            </div>
                            <h3 className='font-bold'>বাংলাদেশ থেকে মিশর সরাসরি (ডিরেক্ট) ফ্লাইট
                                <br /> <span className='font-medium'>(এয়ার: ইজিপ্ট এয়ার)</span>
                                <br /> <span className='font-medium'>(লাগেজ ও হ্যান্ডব্যাগ: ২টি লাগেজে ২৩ + ২৩ = ৪৬কেজি এবং হ্যান্ডব্যাগ এ ৭কেজি)</span>
                            </h3>
                        </div>
                    </div>

                </>
            }
            {
                selectedAir == "Makkah" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="currentColor" d="M35.77 8.16a2.43 2.43 0 0 0-1.9-2L28 4.87a4.5 4.5 0 0 0-3.65.79L7 18.3l-4.86-.2a1.86 1.86 0 0 0-1.23 3.31l5 3.93c.6.73 1 .59 10.93-4.82l.93 9.42a1.36 1.36 0 0 0 .85 1.18a1.4 1.4 0 0 0 .54.1a1.54 1.54 0 0 0 1-.41l2.39-2.18a1.52 1.52 0 0 0 .46-.83l2.19-11.9c3.57-2 6.95-3.88 9.36-5.25a2.43 2.43 0 0 0 1.21-2.49m-2.2.75c-2.5 1.42-6 3.41-9.76 5.47l-.41.23l-2.33 12.67l-1.47 1.34l-1.1-11.3l-1.33.68C10 22 7.61 23.16 6.79 23.52l-4.3-3.41l5.08.22l18-13.06a2.5 2.5 0 0 1 2-.45l5.85 1.26a.43.43 0 0 1 .35.37a.42.42 0 0 1-.2.46" className="clr-i-outline clr-i-outline-path-1" /><path fill="currentColor" d="m7 12.54l3.56 1l1.64-1.19l-4-1.16l1.8-1.1l5.47-.16l2.3-1.67L10 8.5a1.25 1.25 0 0 0-.7.17L6.67 10.2A1.28 1.28 0 0 0 7 12.54" className="clr-i-outline clr-i-outline-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                            </div>
                            <h3 className='font-bold'>মিশর থেকে মক্কা সরাসরি (ডিরেক্ট) ফ্লাইট
                                <br /> <span className='font-medium'>(এয়ার: ইজিপ্ট এয়ার)</span>
                                <br /> <span className='font-medium'>(লাগেজ ও হ্যান্ডব্যাগ: ২টি লাগেজে ২৩ + ২৩ = ৪৬কেজি এবং হ্যান্ডব্যাগ এ ৭কেজি)</span>
                            </h3>
                        </div>
                    </div>
                </>
            }
            {
                selectedAir == "Madinah" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="currentColor" d="M35.77 8.16a2.43 2.43 0 0 0-1.9-2L28 4.87a4.5 4.5 0 0 0-3.65.79L7 18.3l-4.86-.2a1.86 1.86 0 0 0-1.23 3.31l5 3.93c.6.73 1 .59 10.93-4.82l.93 9.42a1.36 1.36 0 0 0 .85 1.18a1.4 1.4 0 0 0 .54.1a1.54 1.54 0 0 0 1-.41l2.39-2.18a1.52 1.52 0 0 0 .46-.83l2.19-11.9c3.57-2 6.95-3.88 9.36-5.25a2.43 2.43 0 0 0 1.21-2.49m-2.2.75c-2.5 1.42-6 3.41-9.76 5.47l-.41.23l-2.33 12.67l-1.47 1.34l-1.1-11.3l-1.33.68C10 22 7.61 23.16 6.79 23.52l-4.3-3.41l5.08.22l18-13.06a2.5 2.5 0 0 1 2-.45l5.85 1.26a.43.43 0 0 1 .35.37a.42.42 0 0 1-.2.46" className="clr-i-outline clr-i-outline-path-1" /><path fill="currentColor" d="m7 12.54l3.56 1l1.64-1.19l-4-1.16l1.8-1.1l5.47-.16l2.3-1.67L10 8.5a1.25 1.25 0 0 0-.7.17L6.67 10.2A1.28 1.28 0 0 0 7 12.54" className="clr-i-outline clr-i-outline-path-2" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                            </div>
                            <h3 className='font-bold'>মদিনা থেকে বাংলাদেশ ট্রান্জিট (মিশর এ ট্রান্জিট ৩-৪ ঘন্টা) ফ্লাইট
                                <br /> <span className='font-medium'>(এয়ার: ইজিপ্ট এয়ার)</span>
                                <br /> <span className='font-medium'>(লাগেজ ও হ্যান্ডব্যাগ: ২টি লাগেজে ২৩ + ২৩ = ৪৬কেজি এবং হ্যান্ডব্যাগ এ ৭কেজি)</span>
                                <br /> <span className='font-medium'>(স্বর্ণ: 10ভরি (100 গ্রাম বা তারচেয়ে কম) )</span>
                            </h3>
                        </div>
                    </div>
                </>
            }
        </section>
    );
};

export default UEAir;