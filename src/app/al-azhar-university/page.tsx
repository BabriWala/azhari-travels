import React from 'react';
import UniversityHero from './UniversityHero';
import './university.css';
import AlAzharPackagePage from './university-sections/AlAzharPackagePage';
import AlAzharAdmissionDocuments from './university-sections/AlAzharAdmissionDocuments';
import AlAzharNotSuitablePage from './university-sections/AlAzharNotSuitablePage';
import ProcessingSystemPage from './university-sections/ProcessingSystemPage';
import AdmissionDetailsPage from './university-sections/AdmissionDetailsPage';
import StudentGallery from './university-sections/StudentGallery';
import StudentExpenses from './university-sections/StudentExpenses';
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
        <div className='az-university hind-siliguri-regular'>
            <UniversityHero />
            <div id="admission-documents"><AlAzharAdmissionDocuments /></div>
            <AlAzharNotSuitablePage></AlAzharNotSuitablePage>
            <ImportantNotesPage></ImportantNotesPage>
            <div id="admission-details"><AdmissionDetailsPage /></div>
            <StudentGallery />
            <StudentExpenses />
            <AlAzharPackagePage></AlAzharPackagePage>
            <ProcessingSystemPage></ProcessingSystemPage>
            <ScholarshipsExpensesPage></ScholarshipsExpensesPage>

            <div id="study-guide"><EducationalStructurePage /></div>
            <MahadulQiraatPage />
            <AlAzharFacultiesPage></AlAzharFacultiesPage>
            <PopularFacultiesPage></PopularFacultiesPage>
            <QuranMemorizationPage />
            <ArabicLanguagePage></ArabicLanguagePage>
            <ArabicLanguageProficiencyPage></ArabicLanguageProficiencyPage>
            <FourMadhhabsPage />
            <AqeedahPage></AqeedahPage>
            <FatwaBoardPage></FatwaBoardPage>
            <FamousScholarsPage></FamousScholarsPage>
            <div id="university-contact"><OurAddressPage /></div>
        </div>
    );
};

export default page;
