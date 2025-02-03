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
                        {/* <button
                            onClick={() => setSelectedTimeItinery("Itinery")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedTimeItinery === "Itinery"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedTimeItinery === "Itinery" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মক্কা</span>
                        </button> */}

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
                                তারিখ: <span className='font-medium'>২ এপ্রিল (সম্ভাব্য তারিখ)</span> <br />
                                সীট বাকি রয়েছে: <span className='font-medium'>১৫টি</span> <br />
                                সদস্য: <span className='font-medium'>15 - 20 জন</span>
                            </h3>
                        </div>
                    </div>
                </>
            }
            {/* {
                selectedTimeItinery == "Itinery" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M960 0q26 0 45 19t19 45v704q0 53-20 99t-55 81t-82 55t-99 21v960q0 26-19 45t-45 19t-45-19t-19-45v-960q-53 0-99-20t-81-55t-55-81t-21-100V64q0-26 19-45t45-19t45 19t19 45v704q0 27 10 50t27 40t41 28t50 10V64q0-26 19-45t45-19t45 19t19 45v832q27 0 50-10t40-27t28-41t10-50V64q0-26 19-45t45-19m704 0v1984q0 26-19 45t-45 19t-45-19t-19-45v-576q-37 0-80 1t-85-1t-82-12t-70-31t-49-57t-18-92V448q0-93 35-174t96-142t142-96t175-36zm-128 134q-56 11-102 40t-81 72t-54 93t-19 109v768q0 26 19 45t45 19h192z" /></svg>
                            </div>
                            <h3 className='font-bold'>
                                সকাল: <span className='font-medium'>গরু, মুরগী, মাছ, ডিম ইত্যাদি</span> <br />
                                দুপুর: <span className='font-medium'>গরু, মুরগী, মাছ, ডিম ইত্যাদি</span> <br />
                                রাত্র: <span className='font-medium'>গরু, মুরগী, মাছ, ডিম ইত্যাদি</span>
                            </h3>

                        </div>
                    </div>
                </>
            } */}
        </section>
    );
};

export default UETimeItinery;