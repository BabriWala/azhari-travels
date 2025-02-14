import React, { useState } from 'react';

const AUTimeItinery = () => {
    const [selectedTimeItinery, setSelectedTimeItinery] = useState("Time");

    return (
        <section className='mb-5'>
            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5 mb-2'>
                <h3 className='font-bold'>কাগজপত্র:</h3>
                <div className="flex items-center space-x-4">
                    {/* Segmented Control for Time and Itinery */}
                    <div className="flex flex-wrap gap-2 md:flex-row w-full md:w-auto border rounded-md p-2 overflow-hidden bg-white">
                        <button
                            onClick={() => setSelectedTimeItinery("Time")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedTimeItinery === "Time"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4 rounded-full ${selectedTimeItinery === "Time" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>ডকুমেন্টস</span>

                        </button>
                    </div>
                </div>
            </div>
            {
                selectedTimeItinery == "Time" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 16l3.5 3.5l6-6m8 2.5a13 13 0 1 1-26 0a13 13 0 0 1 26 0" /></svg></div>
                            <h3 className='font-bold'>পাসপোর্ট
                            </h3>
                        </div>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 16l3.5 3.5l6-6m8 2.5a13 13 0 1 1-26 0a13 13 0 0 1 26 0" /></svg></div>
                            <h3 className='font-bold'>পুলিশ ক্লিয়ারেন্স</h3>
                        </div>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 16l3.5 3.5l6-6m8 2.5a13 13 0 1 1-26 0a13 13 0 0 1 26 0" /></svg></div>
                            <h3 className='font-bold'> জন্ম নিবন্ধন সার্টিফিকেট (অনলাইন কপি) </h3>
                        </div>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 16l3.5 3.5l6-6m8 2.5a13 13 0 1 1-26 0a13 13 0 0 1 26 0" /></svg></div>
                            <h3 className='font-bold'> শরহে বেকায়া অথবা আলিমের সার্টিফিকেট (সকল বিষয়ে পাশ মার্কস থাকলেই হবে এবং নোটারী মিনিস্ট্রী) </h3>
                        </div>
                    </div>
                </>
            }
        </section>
    );
};

export default AUTimeItinery;