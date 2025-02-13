import React, { useState } from 'react';

const AUTravel = () => {
    const [selectedTravel, setSelectedTravel] = useState("Egypt");

    return (
        <section className='mb-5'>
            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5 mb-2'>
                <h3 className='font-bold'>যাতায়াত:</h3>
                <div className="flex items-center space-x-4">
                    {/* Segmented Control for Egypt and Makkah */}
                    <div className="flex flex-wrap gap-2 md:flex-row w-full md:w-auto border rounded-md p-2 overflow-hidden bg-white">
                        <button
                            onClick={() => setSelectedTravel("Egypt")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedTravel === "Egypt"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4 rounded-full ${selectedTravel === "Egypt" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মিশর</span>

                        </button>
                        <button
                            onClick={() => setSelectedTravel("Makkah")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedTravel === "Makkah"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedTravel === "Makkah" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মক্কা</span>
                        </button>
                        <button
                            onClick={() => setSelectedTravel("Madinah")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedTravel === "Madinah"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedTravel === "Madinah" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মদিনা</span>
                        </button>
                    </div>
                </div>
            </div>
            {
                selectedTravel == "Egypt" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3l-1 1v1h1l2-2.03L9 18v-5H4V6h9v2h2V7a3 3 0 0 0-3-3M5 14a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 13.77v5.51c0 .38.32.72.7.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .7-.34.7-.72v-5.51zm-8.16.34h7.19l1.03 3h-9.25zM12 16a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m8 0a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1" /></svg>
                            </div>
                            <h3 className='font-bold'>
                                হাইস গাড়ি (নন এসি)
                            </h3>
                        </div>
                    </div>
                </>
            }
            {
                selectedTravel == "Makkah" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3l-1 1v1h1l2-2.03L9 18v-5H4V6h9v2h2V7a3 3 0 0 0-3-3M5 14a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 13.77v5.51c0 .38.32.72.7.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .7-.34.7-.72v-5.51zm-8.16.34h7.19l1.03 3h-9.25zM12 16a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m8 0a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1" /></svg>
                            </div>
                            <h3 className='font-bold'>
                                বাস (এসি)
                            </h3>
                        </div>
                    </div>
                </>
            }
            {
                selectedTravel == "Madinah" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3l-1 1v1h1l2-2.03L9 18v-5H4V6h9v2h2V7a3 3 0 0 0-3-3M5 14a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 13.77v5.51c0 .38.32.72.7.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .7-.34.7-.72v-5.51zm-8.16.34h7.19l1.03 3h-9.25zM12 16a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m8 0a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1" /></svg>
                            </div>
                            <h3 className='font-bold'>
                                বাস (এসি)
                            </h3>
                        </div>
                    </div>
                </>
            }
        </section>
    );
};

export default AUTravel;