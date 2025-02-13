import React, { useState } from 'react';

const AUINI = () => {
    const [selectedAUINI, setSelectedAUINI] = useState("Included");

    return (
        <section className='mb-5'>
            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5 mb-2'>
                <h3 className='font-bold'>অন্তর্ভূক্ত ও অন্তর্ভূক্ত নয়:</h3>
                <div className="flex items-center space-x-4">
                    {/* Segmented Control for Included and NotIncluded */}
                    <div className="flex flex-wrap gap-2 md:flex-row w-full md:w-auto border rounded-md p-2 overflow-hidden bg-white">
                        <button
                            onClick={() => setSelectedAUINI("Included")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedAUINI === "Included"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4 rounded-full ${selectedAUINI === "Included" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>যা এই প্যাকেজের অন্তর্ভূক্ত <br /> <strong className='underline'><i>তা দেখতে ক্লিক করুন এখানে</i></strong></span>

                        </button>
                        <button
                            onClick={() => setSelectedAUINI("NotIncluded")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedAUINI === "NotIncluded"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedAUINI === "NotIncluded" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>যা এই প্যাকেজের অন্তর্ভূক্ত নয় <br /> <strong className='underline'><i>তা দেখতে ক্লিক করুন এখানে</i></strong></span>
                        </button>
                    </div>
                </div>
            </div>
            {
                selectedAUINI == "Included" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 16l3.5 3.5l6-6m8 2.5a13 13 0 1 1-26 0a13 13 0 0 1 26 0" /></svg></div>
                            <h3 className='font-bold'>মিশর ভিসা
                                <br /> <span className='font-medium'>(ভিসা: অন এরাইভেল ভিসা ভিসা)</span>
                                <br /> <span className='font-medium'>(বিবিধ: কায়রো এয়ারপোর্ট এ  ২৫ ডলার পে করে স্টিকার লাগিয়ে নিতে হবে)</span>
                                <br /> <span className='font-medium'>(মেয়াদ: ৩০দিন)</span>
                            </h3>
                        </div>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 16l3.5 3.5l6-6m8 2.5a13 13 0 1 1-26 0a13 13 0 0 1 26 0" /></svg></div>
                            <h3 className='font-bold'> ওকে টু বোর্ড </h3>
                        </div>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 16l3.5 3.5l6-6m8 2.5a13 13 0 1 1-26 0a13 13 0 0 1 26 0" /></svg></div>
                            <h3 className='font-bold'> অফার লেটার </h3>
                        </div>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.5 16l3.5 3.5l6-6m8 2.5a13 13 0 1 1-26 0a13 13 0 0 1 26 0" /></svg></div>
                            <h3 className='font-bold'> টিকেট (যাওয়া-আসা) </h3>
                        </div>

                    </div>

                </>
            }
            {
                selectedAUINI == "NotIncluded" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12m8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8" /></svg>
                            </div>
                            <h3 className='font-bold'>কায়রো এয়ারপোর্ট এ স্টীকার ক্রয়ের জন্য ক্যাশ ২৫ ডলার</h3>
                        </div>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12m8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8" /></svg>
                            </div>
                            <h3 className='font-bold'> ইকামাহর জন্য ২৩০ ডলার </h3>
                        </div>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12m8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8" /></svg>
                            </div>
                            <h3 className='font-bold'> বাসা, খাওয়া, যাতায়াত খরচ </h3>
                        </div>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M4 12c0-4.4 3.6-8 8-8c1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12m8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8" /></svg>
                            </div>
                            <h3 className='font-bold'> ব্যক্তিগত খরচ </h3>
                        </div>
                    </div>
                </>
            }

        </section>
    );
};

export default AUINI;