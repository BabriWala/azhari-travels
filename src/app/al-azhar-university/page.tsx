import React from 'react';
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
            <EducationalStructurePage />
            <AlAzharFacultiesPage />
            <PopularFacultiesPage />
            <MahadulQiraatPage />
            <QuranMemorizationPage />
            <ArabicLanguagePage />
            <ArabicLanguageProficiencyPage />
            <FourMadhhabsPage />
            <AqeedahPage />
            <FatwaBoardPage />
            <FamousScholarsPage />
            <AdmissionDetailsPage />
            <AlAzharAdmissionDocuments />
            <AlAzharNotSuitablePage />
            <ImportantNotesPage />
            <ScholarshipsExpensesPage />
            <AlAzharPackagePage />
            <ProcessingSystemPage />
            <OurAddressPage />
        </div>
    );
};

export default page;
