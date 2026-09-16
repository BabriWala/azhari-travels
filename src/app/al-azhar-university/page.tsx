import React from 'react';
import Link from 'next/link';
import AlAzharPackagePage from './university-sections/AlAzharPackagePage';
import AlAzharAdmissionDocuments from './university-sections/AlAzharAdmissionDocuments';
import AlAzharNotSuitablePage from './university-sections/AlAzharNotSuitablePage';
import ProcessingSystemPage from './university-sections/ProcessingSystemPage';
import AdmissionDetailsPage from './university-sections/AdmissionDetailsPage';
import ImportantNotesPage from './university-sections/ImportantNotesPage';
import ScholarshipsExpensesPage from './university-sections/ScholarshipsExpensesPage';
import EducationalStructurePage from './university-sections/EducationalStructurePage';
import MahadulQiraatPage from './university-sections/MahadulQiraatPage';
import AlAzharFacultiesPage from './university-sections/AlAzharFacultiesPage';
import PopularFacultiesPage from './university-sections/PopularFacultiesPage';
import QuranMemorizationPage from './university-sections/QuranMemorizationPage';
import ArabicLanguagePage from './university-sections/ArabicLanguagePage';
import ArabicLanguageProficiencyPage from './university-sections/ArabicLanguageProficiencyPage';
import FourMadhhabsPage from './university-sections/FourMadhhabsPage';
import AqeedahPage from './university-sections/AqeedahPage';
import FatwaBoardPage from './university-sections/FatwaBoardPage';
import FamousScholarsPage from './university-sections/FamousScholarsPage';
import OurAddressPage from './university-sections/OurAddressPage';

const page = () => {
    return (
        <div className='py-[40px] hind-siliguri-regular'>
            <div className="mx-auto mb-6 flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5">
                <div><p className="text-lg font-bold text-emerald-950">আল-আযহার স্কলারশিপে আবেদন করতে চান?</p><p className="mt-1 text-sm text-emerald-800">যোগ্যতা, কাগজপত্র ও ধাপে ধাপে আবেদন নির্দেশনা দেখুন।</p></div>
                <Link href="/al-azhar-scholarship" className="rounded-xl bg-emerald-800 px-5 py-3 font-semibold text-white hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4">স্কলারশিপ গাইড দেখুন →</Link>
            </div>
            <AlAzharPackagePage></AlAzharPackagePage>
            <AlAzharAdmissionDocuments></AlAzharAdmissionDocuments>
            <AlAzharNotSuitablePage></AlAzharNotSuitablePage>
            <ProcessingSystemPage></ProcessingSystemPage>
            <AdmissionDetailsPage></AdmissionDetailsPage>
            <ImportantNotesPage></ImportantNotesPage>
            <ScholarshipsExpensesPage></ScholarshipsExpensesPage>
            <EducationalStructurePage></EducationalStructurePage>
            <MahadulQiraatPage></MahadulQiraatPage>
            <AlAzharFacultiesPage></AlAzharFacultiesPage>
            <PopularFacultiesPage></PopularFacultiesPage>
            <QuranMemorizationPage></QuranMemorizationPage>
            <ArabicLanguagePage></ArabicLanguagePage>
            <ArabicLanguageProficiencyPage></ArabicLanguageProficiencyPage>
            <FourMadhhabsPage></FourMadhhabsPage>
            <AqeedahPage></AqeedahPage>
            <FatwaBoardPage></FatwaBoardPage>
            <FamousScholarsPage></FamousScholarsPage>
            <OurAddressPage></OurAddressPage>
        </div>
    );
};

export default page;
