import React, { useState } from 'react';

const UELunch = () => {
    const [selectedLunch, setSelectedLunch] = useState("Egypt");

    return (
        <section className='mb-5'>
            <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5 mb-2'>
                <h3 className='font-bold'>খাবার:</h3>
                <div className="flex items-center space-x-4">
                    {/* Segmented Control for Egypt and Makkah */}
                    <div className="flex flex-wrap gap-2 md:flex-row w-full md:w-auto border rounded-md p-2 overflow-hidden bg-white">
                        <button
                            onClick={() => setSelectedLunch("Egypt")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedLunch === "Egypt"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4 rounded-full ${selectedLunch === "Egypt" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মিশর</span>

                        </button>
                        <button
                            onClick={() => setSelectedLunch("Makkah")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedLunch === "Makkah"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedLunch === "Makkah" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মক্কা</span>
                        </button>
                        <button
                            onClick={() => setSelectedLunch("Madinah")}
                            className={`font-bold px-4 transition-all duration-100 cursor-pointer py-1 rounded-md flex items-center gap-3 ${selectedLunch === "Madinah"
                                ? "bg-green-100 text-green-700"
                                : ""
                                }`}
                        >
                            <div className={`w-4 h-4  rounded-full  ${selectedLunch === "Madinah" ? " bg-green-700" : "animate-pulse bg-orange-400"}`}></div>
                            <span>মদিনা</span>
                        </button>
                    </div>
                </div>
            </div>
            {
                selectedLunch == "Egypt" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M960 0q26 0 45 19t19 45v704q0 53-20 99t-55 81t-82 55t-99 21v960q0 26-19 45t-45 19t-45-19t-19-45v-960q-53 0-99-20t-81-55t-55-81t-21-100V64q0-26 19-45t45-19t45 19t19 45v704q0 27 10 50t27 40t41 28t50 10V64q0-26 19-45t45-19t45 19t19 45v832q27 0 50-10t40-27t28-41t10-50V64q0-26 19-45t45-19m704 0v1984q0 26-19 45t-45 19t-45-19t-19-45v-576q-37 0-80 1t-85-1t-82-12t-70-31t-49-57t-18-92V448q0-93 35-174t96-142t142-96t175-36zm-128 134q-56 11-102 40t-81 72t-54 93t-19 109v768q0 26 19 45t45 19h192z"/></svg>
                            </div>
                            <h3 className='font-bold'>
                                সকাল: <span className='font-medium'>সেন্ডউইচ, রুটি, ভাজি, ডিম, ফল (ফ্রুটস), ইত্যাদি</span> <br />
                                দুপুর: <span className='font-medium'>গরু, মুরগী, বড় মাছ, ডিম ইত্যাদি</span> <br />
                                রাত্র: <span className='font-medium'>নিজ দায়িত্বে</span>
                            </h3>
                        </div>
                    </div>
                </>
            }
            {
                selectedLunch == "Makkah" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M960 0q26 0 45 19t19 45v704q0 53-20 99t-55 81t-82 55t-99 21v960q0 26-19 45t-45 19t-45-19t-19-45v-960q-53 0-99-20t-81-55t-55-81t-21-100V64q0-26 19-45t45-19t45 19t19 45v704q0 27 10 50t27 40t41 28t50 10V64q0-26 19-45t45-19t45 19t19 45v832q27 0 50-10t40-27t28-41t10-50V64q0-26 19-45t45-19m704 0v1984q0 26-19 45t-45 19t-45-19t-19-45v-576q-37 0-80 1t-85-1t-82-12t-70-31t-49-57t-18-92V448q0-93 35-174t96-142t142-96t175-36zm-128 134q-56 11-102 40t-81 72t-54 93t-19 109v768q0 26 19 45t45 19h192z"/></svg>
                            </div>
                            <h3 className='font-bold'>
                                সকাল: <span className='font-medium'>গরু, মুরগী, মাছ, ডিম ইত্যাদি</span> <br />
                                দুপুর: <span className='font-medium'>গরু, মুরগী, মাছ, ডিম ইত্যাদি</span> <br />
                                রাত্র: <span className='font-medium'>গরু, মুরগী, মাছ, ডিম ইত্যাদি</span>
                            </h3>

                        </div>
                    </div>
                </>
            }
            {
                selectedLunch == "Madinah" && <>
                    <div className='p-2 bg-green-100 border rounded-md text-green-700 flex-col flex gap-2'>
                        <div className='flex items-start gap-2 border-b-[1px] border-green-200 pb-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M960 0q26 0 45 19t19 45v704q0 53-20 99t-55 81t-82 55t-99 21v960q0 26-19 45t-45 19t-45-19t-19-45v-960q-53 0-99-20t-81-55t-55-81t-21-100V64q0-26 19-45t45-19t45 19t19 45v704q0 27 10 50t27 40t41 28t50 10V64q0-26 19-45t45-19t45 19t19 45v832q27 0 50-10t40-27t28-41t10-50V64q0-26 19-45t45-19m704 0v1984q0 26-19 45t-45 19t-45-19t-19-45v-576q-37 0-80 1t-85-1t-82-12t-70-31t-49-57t-18-92V448q0-93 35-174t96-142t142-96t175-36zm-128 134q-56 11-102 40t-81 72t-54 93t-19 109v768q0 26 19 45t45 19h192z"/></svg>
                            </div>
                            <h3 className='font-bold'>
                                সকাল: <span className='font-medium'>গরু, মুরগী, মাছ, ডিম ইত্যাদি</span> <br />
                                দুপুর: <span className='font-medium'>গরু, মুরগী, মাছ, ডিম ইত্যাদি</span> <br />
                                রাত্র: <span className='font-medium'>গরু, মুরগী, মাছ, ডিম ইত্যাদি</span>
                            </h3>
                        </div>
                    </div>
                </>
            }
        </section>
    );
};

export default UELunch;