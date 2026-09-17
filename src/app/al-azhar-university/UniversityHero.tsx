import Link from "next/link";
import { ArrowUpRight, BookOpen, MapPin } from "lucide-react";

export default function UniversityHero() {
    return <>
        <header className="az-hero">
            <div className="az-hero-inner">
                <div>
                    <span className="az-eyebrow"><MapPin size={16} /> কায়রো, মিশর</span>
                    <p className="az-hero-kicker">AZHARI · STUDENT CONSULTANCY</p>
                    <h1>আল-আযহার<br /><span>বিশ্ববিদ্যালয়</span></h1>
                    <p className="az-hero-description">আপনার শিক্ষাযাত্রার প্রস্তুতি, এক জায়গায়। ভর্তির প্রয়োজনীয় কাগজপত্র, পড়াশোনার পথ এবং খরচ সম্পর্কে বিস্তারিত জানুন।</p>
                    <div className="az-hero-actions">
                        <a href="#admission-documents" className="az-primary-link">ভর্তির প্রস্তুতি শুরু করুন <ArrowUpRight size={19} /></a>
                        <Link href="/al-azhar-scholarship" className="az-secondary-link">স্কলারশিপ সম্পর্কে জানুন <ArrowUpRight size={19} /></Link>
                    </div>
                </div>
                <aside className="az-guide-card" aria-label="শিক্ষাযাত্রার প্রস্তুতি">
                    <div className="az-guide-brand"><img src="/al-azhar/azhari-logo.svg" alt="Azhari Travels" width={76} height={76} /><div><span>AZHARI TRAVELS</span><p>আপনার শিক্ষাযাত্রার সঙ্গী</p></div></div>
                    <div className="az-guide-heading"><span>আপনার শিক্ষাযাত্রা</span></div>
                    <p>পরিকল্পনা থেকে প্রস্তুতি</p>
                    <ol>
                        <li><span>০১</span><div><strong>ভর্তির প্রস্তুতি</strong><p>কাগজপত্র ও প্রয়োজনীয় নির্দেশনা</p></div></li>
                        <li><span>০২</span><div><strong>পড়াশোনার পরিকল্পনা</strong><p>ভাষা শিক্ষা, বিভাগ ও শিক্ষাক্রম</p></div></li>
                        <li><span>০৩</span><div><strong>খরচ ও যাত্রা</strong><p>থাকা, খাওয়া ও সেবা প্যাকেজ</p></div></li>
                    </ol>
                    <a href="#university-contact">প্রস্তুতি নিয়ে আমাদের সঙ্গে কথা বলুন <ArrowUpRight size={18} /></a>
                </aside>
            </div>
        </header>
        <nav className="az-section-nav" aria-label="বিশ্ববিদ্যালয় পেজের বিভাগ">
            <div><BookOpen size={18} aria-hidden="true" />
                <a href="#admission-documents">প্রয়োজনীয় কাগজপত্র</a>
                <a href="#admission-details">ভর্তি বিবরণ</a>
                <a href="#student-gallery">শিক্ষার্থী গ্যালারি</a>
                <a href="#student-expenses">খরচ</a>
                <a href="#study-guide">শিক্ষাক্রম</a>
                <a href="#university-contact">যোগাযোগ</a>
            </div>
        </nav>
    </>;
}
