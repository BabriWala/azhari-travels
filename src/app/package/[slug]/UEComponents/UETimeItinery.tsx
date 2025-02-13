import React, { useState } from 'react';

const UETimeItinery = () => {
    const [selectedTimeItinery, setSelectedTimeItinery] = useState("Time");

    return (
        <section className='mb-5'>
            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5 mb-2'>
                <h3 className='font-bold'>সময়সূচী:</h3>
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
                            <span>৪র্থ কাফেলা</span>

                        </button>
                        <button
                            onClick={() => setSelectedTimeItinery("DayNight")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedTimeItinery === "DayNight"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedTimeItinery === "DayNight" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>রাত-দিন</span>
                        </button>
                        <button
                            onClick={() => setSelectedTimeItinery("Itinerary")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedTimeItinery === "Itinerary"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedTimeItinery === "Itinerary" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>আইটিনারি/ইটিনারি</span>
                        </button>

                    </div>
                </div>
            </div>
            {
                selectedTimeItinery == "Time" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7.5 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m8-.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-10 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m.6 11.998L5 15a2 2 0 0 1-2-2V9.25A.25.25 0 0 1 3.25 9h1.764c.04-.367.17-.708.365-1H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973a5 5 0 0 1-.304-.975m9.496.975Q14.794 16 15 16a3 3 0 0 0 3-3V9.25C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1h1.764a.25.25 0 0 1 .25.25V13a2 2 0 0 1-2.1 1.998a5 5 0 0 1-.304.975M7.25 8C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 8 0V9.25C14 8.56 13.44 8 12.75 8zM7 9.25A.25.25 0 0 1 7.25 9h5.5a.25.25 0 0 1 .25.25V14a3 3 0 1 1-6 0z" /></svg>
                            </div>
                            <h3 className='font-bold'>
                                তারিখ: <span className='font-medium'>২ এপ্রিল</span> <br />
                                সীট বাকি রয়েছে: <span className='font-medium'>5টি</span> <br />
                                সদস্য: <span className='font-medium'>20 জন</span>
                            </h3>
                        </div>
                    </div>
                </>
            }
            {
                selectedTimeItinery == "DayNight" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.25 4a.75.75 0 0 0 1.5 0zm1.5-2a.75.75 0 0 0-1.5 0zm-1.5 20a.75.75 0 0 0 1.5 0zm1.5-2a.75.75 0 0 0-1.5 0zM4 12.75a.75.75 0 0 0 0-1.5zm-2-1.5a.75.75 0 0 0 0 1.5zm20 1.5a.75.75 0 0 0 0-1.5zm-2-1.5a.75.75 0 0 0 0 1.5zM6.87 18.19a.75.75 0 1 0-1.06-1.06zm-2.47.35a.75.75 0 1 0 1.06 1.06zm13.79-1.41a.75.75 0 1 0-1.06 1.06zm.35 2.47a.75.75 0 1 0 1.06-1.06zM5.46 4.4A.75.75 0 0 0 4.4 5.46zm.35 2.47a.75.75 0 0 0 1.06-1.06zM12.75 4V2h-1.5v2zm0 18v-2h-1.5v2zM4 11.25H2v1.5h2zm18 0h-2v1.5h2zM5.81 17.13L4.4 18.54l1.06 1.06l1.41-1.41zM18.54 4.4l-1.41 1.41l1.06 1.06l1.41-1.41zm-1.41 13.79l1.41 1.41l1.06-1.06l-1.41-1.41zM4.4 5.46l1.41 1.41l1.06-1.06L5.46 4.4zM15.25 12A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z" /></svg>
                            </div>
                            <h3 className='font-bold'>
                                মিশর: <span className='font-medium'>৫দিন ৫রাত</span> <br />
                                মক্কা: <span className='font-medium'>৫দিন ৫রাত</span> <br />
                                মদিনা: <span className='font-medium'>৩দিন ৩রাত</span>
                            </h3>

                        </div>
                    </div>
                </>
            }
            {
                selectedTimeItinery == "Itinerary" && <>
                    <a href='/itinerary/ue/Egypt-Makkah-Madinah-Itinerary.pdf' target='_blank'>
                        <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                            <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                                <div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path fill="currentColor" d="M57.62 61.68c-1.7.24-2.87 1.78-2.62 3.43a3.07 3.07 0 0 0 2.22 2.54s7.47 2.46 20.18 3.51c10.21.85 21.8-.73 21.8-.73c1.7-.04 3.03-1.45 2.99-3.15a3.065 3.065 0 0 0-3.15-2.99c-.2 0-.4.04-.61.08c0 0-11.34 1.41-20.55.65c-12.15-.97-18.77-3.19-18.77-3.19c-.48-.16-1.01-.24-1.49-.16Zm0-15.22c-1.7.24-2.87 1.78-2.62 3.43a3.07 3.07 0 0 0 2.22 2.54s7.47 2.46 20.18 3.51c10.21.85 21.8-.73 21.8-.73c1.7-.04 3.03-1.45 2.99-3.15a3.065 3.065 0 0 0-3.15-2.99c-.2 0-.4.04-.61.08c0 0-11.34 1.41-20.55.65c-12.15-.97-18.77-3.19-18.77-3.19c-.48-.16-1.01-.24-1.49-.16Zm0-15.22c-1.7.24-2.87 1.78-2.62 3.43a3.07 3.07 0 0 0 2.22 2.54s7.47 2.46 20.18 3.51c10.21.85 21.8-.73 21.8-.73c1.7-.04 3.03-1.45 2.99-3.15a3.065 3.065 0 0 0-3.15-2.99c-.2 0-.4.04-.61.08c0 0-11.34 1.41-20.55.65c-12.15-.97-18.77-3.19-18.77-3.19c-.48-.16-1.01-.2-1.49-.16Zm0-15.18c-1.7.24-2.87 1.78-2.62 3.43a3.07 3.07 0 0 0 2.22 2.54s7.47 2.46 20.18 3.51c10.21.85 21.8-.73 21.8-.73c1.7-.04 3.03-1.45 2.99-3.15a3.065 3.065 0 0 0-3.15-2.99c-.2 0-.4.04-.61.08c0 0-11.34 1.41-20.55.65c-12.15-.97-18.77-3.19-18.77-3.19a2.74 2.74 0 0 0-1.49-.16ZM36.31 0C20.32.12 14.39 5.05 14.39 5.05v119.37s5.81-5.01 24.54-4.24s22.57 7.35 45.58 7.79s28.78-3.55 28.78-3.55l.32-121.67S103.28 5.7 83.09 5.86C62.95 6.01 58.11.73 39.62.12C38.49.04 37.4 0 36.31 0m13.36 7.79s9.69 3.19 27.57 4.08c15.14.77 30.28-1.49 30.28-1.49v108.15s-7.67 4.04-26.84 2.66c-14.86-1.05-31.2-6.7-31.2-6.7l.2-106.69Zm-9.32 2.83c1.7 0 3.11 1.37 3.11 3.11s-1.37 3.11-3.11 3.11c0 0-5.01.04-8.07.32c-5.13.52-8.64 2.38-8.64 2.38c-1.49.81-3.39.2-4.16-1.29c-.81-1.49-.2-3.39 1.29-4.16s4.56-2.42 10.9-3.03c3.67-.4 8.68-.44 8.68-.44m-2.99 15.26c1.7-.04 2.99 0 2.99 0c1.7.2 2.91 1.74 2.7 3.43a3.08 3.08 0 0 1-2.7 2.7s-5.01.04-8.07.32c-5.13.52-8.64 2.38-8.64 2.38c-1.49.81-3.39.2-4.16-1.29c-.81-1.49-.2-3.39 1.29-4.16c0 0 4.56-2.42 10.9-3.03c1.86-.24 4-.32 5.69-.36Zm2.99 15.18c1.7 0 3.11 1.37 3.11 3.11s-1.37 3.11-3.11 3.11c0 0-5.01-.04-8.07.28c-5.13.52-8.64 2.38-8.64 2.38c-1.49.81-3.39.2-4.16-1.29c-.81-1.49-.2-3.39 1.29-4.16c0 0 4.56-2.42 10.9-3.03c3.67-.44 8.68-.4 8.68-.4" /></svg>

                                </div>
                                <h3 className='font-bold'>
                                    ইটিনারি/আইটিনারি ডাউনলোডে করতে এখানে ক্লিক করুন
                                </h3>

                            </div>
                        </div>
                    </a>
                </>
            }
        </section>
    );
};

export default UETimeItinery;