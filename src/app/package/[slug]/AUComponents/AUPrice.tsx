import React, { useState } from 'react';

const AUPrice = () => {
    const [selectedPlan, setSelectedPlan] = useState("AU");

    return (
        <section className='mb-5'>
            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5 mb-2'>
                <h3 className='font-bold'>প্যাকেজ মূল্য:</h3>
                <div className="flex items-center space-x-4">
                    {/* Segmented Control for AU and E */}
                    <div className="flex flex-col gap-2 md:flex-row w-full md:w-auto border rounded-md p-2 overflow-hidden bg-white">
                        <button
                            onClick={() => setSelectedPlan("AU")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedPlan === "AU"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4 rounded-full ${selectedPlan === "AU" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>স্টুডেন্ট প্যাকেজ এর মূল্য</span>

                        </button>
                    </div>
                </div>
            </div>
            {
                selectedPlan == "AU" && <>
                    <div className='p-2 flex flex-col gap-2 bg-green-100 border rounded-md text-green-700'>
                        <div className='flex items-start gap-2'>
                            <div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m8 8l.553-.276A1 1 0 0 1 10 8.618V15a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5-2.5V14h-1m-6-3h7" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" /></g></svg>
                                </div>
                            </div>
                            <h3 className='font-bold'>১,১৫,০০০/- টাকা মাত্র<br /></h3>
                        </div>
                    </div>
                </>
            }
        </section>
    );
};

export default AUPrice;