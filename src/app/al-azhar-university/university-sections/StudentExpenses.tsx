import { Wallet } from "lucide-react";
import { studentExpenses } from "./AlAzharPackagePage";

export default function StudentExpenses() {
 return <section id="student-expenses" aria-labelledby="student-expenses-title" className="scroll-mt-32 bg-gradient-to-br from-[#FFF5EA] via-white to-[#FFF1F6] px-4 py-12 text-[#06113C] sm:px-6 md:py-16 lg:px-8">
  <div className="mx-auto max-w-7xl"><div className="mb-8 max-w-3xl"><span className="inline-flex items-center gap-2 rounded-full bg-[#FFE6CD] px-4 py-2 text-sm font-semibold text-[#06113C]"><Wallet size={18}/>শিক্ষার্থীর বাজেট</span><h2 id="student-expenses-title" className="mt-4 text-3xl font-black text-[#06113C] sm:text-4xl">শিক্ষার্থীদের খরচ</h2><p className="mt-4 leading-8 text-slate-600">ভর্তি ও যাত্রার পাশাপাশি মিশরে থাকা, খাওয়া এবং প্রয়োজনীয় আনুষ্ঠানিকতার জন্য আলাদা বাজেট রাখুন। নিচের খরচগুলো সেবা প্যাকেজের বাইরে।</p></div>
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{studentExpenses.map(({icon:Icon,title,text})=><article key={title} className="rounded-2xl border border-[#FF8300]/25 border-t-4 border-t-[#FF8300] bg-white p-6 shadow-sm even:border-t-[#FF006D]"><span className="inline-flex rounded-xl bg-[#FFF5EA] p-3 text-[#06113C]"><Icon size={24}/></span><h3 className="mt-5 text-xl font-bold text-[#06113C]">{title}</h3><p className="mt-3 leading-8 text-slate-600">{text}</p></article>)}</div>
  <p className="mt-6 rounded-xl border border-[#FF8300]/30 bg-[#FFF5EA] p-5 text-sm leading-7 text-[#06113C]">এগুলো এই পেজের প্যাকেজ অংশে দেওয়া আনুমানিক হিসাব। বাসস্থান, ব্যক্তিগত প্রয়োজন ও বিনিময় হার অনুযায়ী খরচ পরিবর্তিত হতে পারে। যাত্রার আগে সর্বশেষ হিসাব নিশ্চিত করুন।</p></div>
 </section>;
}
