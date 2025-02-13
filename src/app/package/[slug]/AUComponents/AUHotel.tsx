import React, { useState } from 'react';

const AUHotel = () => {
    const [selectedHotel, setSelectedHotel] = useState("Egypt");

    return (
        <section className='mb-5'>
            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5 mb-2'>
                <h3 className='font-bold'>হোটেল:</h3>
                <div className="flex items-center space-x-4">
                    {/* Segmented Control for Egypt and Makkah */}
                    <div className="flex flex-wrap gap-2 md:flex-row w-full md:w-auto border rounded-md p-2 overflow-hidden bg-white">
                        <button
                            onClick={() => setSelectedHotel("Egypt")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedHotel === "Egypt"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4 rounded-full ${selectedHotel === "Egypt" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মিশর</span>

                        </button>
                        <button
                            onClick={() => setSelectedHotel("Makkah")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedHotel === "Makkah"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedHotel === "Makkah" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মক্কা</span>
                        </button>
                        <button
                            onClick={() => setSelectedHotel("Madinah")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedHotel === "Madinah"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedHotel === "Madinah" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মদিনা</span>
                        </button>
                    </div>
                </div>
            </div>
            {
                selectedHotel == "Egypt" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2" /></svg>
                            </div>
                            <h3 className='font-bold'>গিজা, কায়রো<br /> <span className='font-medium'>(হোটেল: ৩ তারকা)</span> </h3>
                        </div>
                    </div>

                </>
            }
            {
                selectedHotel == "Makkah" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2" /></svg>
                            </div>
                            <h3 className='font-bold'>কাবা ঘর থেকে ৪০০- ৬০০ মিটার দূরত্বে কবুতর চত্বরের পাশে <br /> <span className='font-medium'>(হোটেল: স্ট্যান্ডার্ড)</span></h3>
                        </div>
                    </div>
                </>
            }
            {
                selectedHotel == "Madinah" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2" /></svg>
                            </div>
                            <h3 className='font-bold'>মসজিদে নববী থেকে ২০০-৪০০ মিটার দূরত্বে <br /> <span className='font-medium'>(হোটেল: স্ট্যান্ডার্ড)</span></h3>
                        </div>
                    </div>
                </>
            }
        </section>
    );
};

export default AUHotel;