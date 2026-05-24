/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, Search, GraduationCap, BrainCircuit, PlayCircle, Info } from "lucide-react";

export default function App() {
  return (
    <div
      className="w-full min-h-screen bg-[#0A0C10] text-[#E0E0E0] flex flex-row-reverse font-sans overflow-hidden select-none"
      dir="rtl"
    >
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-[#0F1217] border-l border-[#1E252E] flex flex-col hidden md:flex h-screen overflow-y-auto">
        <div className="p-8 border-b border-[#1E252E] flex items-center gap-4 sticky top-0 bg-[#0F1217] z-10">
          <div className="w-10 h-10 rounded-lg bg-[#1A4D2E] border border-[#d4af37] flex items-center justify-center shrink-0">
            <span className="text-[#d4af37] font-serif text-xl">ق</span>
          </div>
          <h1 className="text-xl font-bold text-[#f5f5f0] tracking-wide font-serif">
            أطلس المتشابهات
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <div className="px-4 py-3 bg-[#1A4D2E]/20 text-[#d4af37] border-r-4 border-[#d4af37] rounded-sm flex items-center gap-3">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">تثبيت الحفظ</span>
          </div>
          <div className="px-4 py-3 text-slate-400 hover:bg-slate-800 transition-colors rounded-sm cursor-pointer flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Search className="w-4 h-4" />
              <span className="text-sm">بحث في السور</span>
            </div>
            <span className="text-xs bg-slate-800 px-2 py-0.5 rounded">⌘F</span>
          </div>
          <div className="px-4 py-3 text-slate-400 hover:bg-slate-800 transition-colors rounded-sm cursor-pointer flex items-center gap-3">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm">المنظومات العلمية</span>
          </div>
          <div className="px-4 py-3 text-slate-400 hover:bg-slate-800 transition-colors rounded-sm cursor-pointer flex items-center gap-3">
            <BrainCircuit className="w-4 h-4" />
            <span className="text-sm">اختبارات ذكية</span>
          </div>

          <div className="pt-8 pb-2 px-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            المواضع النشطة
          </div>
          <div className="space-y-1">
            <div className="p-3 text-xs bg-[#161B22] border border-[#1E252E] rounded transition-all cursor-pointer">
              <p className="text-slate-300 mb-1">
                موضع: (فَكُلُوا مِنْهَا حَيْثُ شِئْتُمْ)
              </p>
              <span className="text-[10px] text-slate-500">البقرة - الأعراف</span>
            </div>
            <div className="p-3 text-xs hover:bg-[#161B22] border border-transparent hover:border-[#1E252E] rounded transition-all cursor-pointer">
              <p className="text-slate-400">
                موضع: (يُضِلُّ بِهِ كَثِيرًا وَيَهْدِي بِهِ كَثِيرًا)
              </p>
            </div>
          </div>
        </nav>

        <div className="p-6 border-t border-[#1E252E] bg-[#0A0C10] mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs shrink-0">
              ع
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-300">
                عبدالرحمن خالد
              </p>
              <p className="text-[10px] text-[#d4af37]">مستوى الحافظ</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-[#0A0C10] h-screen overflow-y-auto">
        {/* Top Bar */}
        <header className="h-20 px-6 md:px-10 border-b border-[#1E252E] flex items-center justify-between bg-[#0F1217]/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                مقارنة المتشابه اللفظي
              </span>
              <h2 className="text-lg font-serif text-[#f5f5f0]">
                توسط "شفاعة" و "عدل"
              </h2>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 border border-[#d4af37]/30 text-[#d4af37] text-sm rounded hover:bg-[#d4af37]/10 transition-colors hidden sm:block">
              إضافة ملاحظة
            </button>
            <button className="px-4 py-2 bg-[#d4af37] text-black text-sm font-bold rounded shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:bg-[#c4a133] transition-colors">
              تم التثبيت
            </button>
          </div>
        </header>

        {/* Content Container */}
        <section className="flex-1 p-6 md:p-10 flex flex-col gap-8 max-w-5xl mx-auto w-full">
          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[380px]">
            {/* Verse 1 */}
            <div className="bg-[#0F1217] border border-[#1E252E] rounded-xl flex flex-col overflow-hidden">
              <div className="p-4 border-b border-[#1E252E] flex justify-between bg-black/20 items-center">
                <span className="text-[#d4af37] font-serif">سورة البقرة - ٤٨</span>
                <span className="text-[10px] text-slate-500 uppercase">
                  الربع الثالث
                </span>
              </div>
              <div className="flex-1 p-6 sm:p-8 flex items-center justify-center text-center">
                <p className="text-2xl sm:text-3xl leading-[1.8] sm:leading-[1.8] font-serif text-[#f5f5f0] drop-shadow-sm">
                  وَاتَّقُوا يَوْمًا لَّا تَجْزِي نَفْسٌ عَن نَّفْسٍ شَيْئًا وَلَا يُقْبَلُ
                  مِنْهَا <span className="text-[#d4af37] border-b border-[#d4af37]/50 pb-1">شَفَاعَةٌ</span> وَلَا يُؤْخَذُ
                  مِنْهَا <span className="text-[#d4af37] border-b border-[#d4af37]/50 pb-1">عَدْلٌ</span> وَلَا هُمْ
                  يُنصَرُونَ
                </p>
              </div>
              <div className="p-4 bg-[#1A4D2E]/10 border-t border-[#1E252E] text-center flex items-center justify-center gap-2">
                <Info className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs text-[#d4af37]">
                  قاعدة: الترتيب الأبجدي (ش قبل ع)
                </span>
              </div>
            </div>

            {/* Verse 2 */}
            <div className="bg-[#0F1217] border border-[#1E252E] rounded-xl flex flex-col overflow-hidden">
              <div className="p-4 border-b border-[#1E252E] flex justify-between bg-black/20 items-center">
                <span className="text-[#d4af37] font-serif">سورة البقرة - ١٢٣</span>
                <span className="text-[10px] text-slate-500 uppercase">
                  الربع الثامن
                </span>
              </div>
              <div className="flex-1 p-6 sm:p-8 flex items-center justify-center text-center">
                <p className="text-2xl sm:text-3xl leading-[1.8] sm:leading-[1.8] font-serif text-[#f5f5f0] drop-shadow-sm opacity-80 transition-opacity hover:opacity-100">
                  وَاتَّقُوا يَوْمًا لَّا تَجْزِي نَفْسٌ عَن نَّفْسٍ شَيْئًا وَلَا يُقْبَلُ
                  مِنْهَا <span className="text-emerald-400 border-b border-emerald-400/50 pb-1">عَدْلٌ</span> وَلَا
                  تَنفَعُهَا <span className="text-emerald-400 border-b border-emerald-400/50 pb-1">شَفَاعَةٌ</span> وَلَا
                  هُمْ يُنصَرُونَ
                </p>
              </div>
              <div className="p-4 bg-emerald-900/10 border-t border-[#1E252E] text-center flex items-center justify-center gap-2">
                 <Info className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-emerald-400">
                  الموضع الثاني: العكس لبيان الاختلاف
                </span>
              </div>
            </div>
          </div>

          {/* Analysis Panel */}
          <div className="bg-[#161B22] border border-[#1E252E] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between relative overflow-hidden gap-6">
            <div className="absolute top-0 right-0 w-1 h-full bg-[#d4af37]"></div>
            <div className="flex flex-col gap-4 max-w-2xl">
              <h3 className="text-[#d4af37] font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
                شرح الرابط الذهني
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                في الموضع الأول (الآية 48) جاء لفظ "الشفاعة" قبل "العدل" جرياً على
                مقتضى السياق في دعوة بني إسرائيل، وهو الموضع المشهور. أما في الموضع
                الثاني (الآية 123) تم التقديم والتأخير ليتميز الموضع المتأخر عن
                المتقدم، ويُمكن ضبطها بكلمة{" "}
                <span className="font-bold text-[#f5f5f0] underline decoration-[#d4af37] decoration-2 underline-offset-4">
                  (شع - عش)
                </span>{" "}
                للترميز.
              </p>
            </div>
            <div className="flex gap-8 sm:gap-10 shrink-0">
              <div className="text-center">
                <div className="text-3xl font-serif text-[#f5f5f0]">٤٢</div>
                <div className="text-[10px] text-slate-500 uppercase mt-2">
                  مرة تم التكرار
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-emerald-500">٪٨٨</div>
                <div className="text-[10px] text-slate-500 uppercase mt-2">
                  نسبة الدقة
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="px-6 md:px-10 py-5 border-t border-[#1E252E] flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#0F1217] mt-auto">
          <div className="flex gap-6">
            <span className="text-[11px] text-slate-400 flex items-center gap-1 hover:text-slate-300 transition-colors cursor-pointer">
              <PlayCircle className="w-3 h-3" /> دليل الحفاظ الجامع
            </span>
            <span className="text-[11px] text-slate-400 flex items-center gap-1 hover:text-slate-300 transition-colors cursor-pointer">
              <PlayCircle className="w-3 h-3" /> المصحف المعلم
            </span>
          </div>
          <div className="text-xs text-[#d4af37]/60 italic font-serif">
            "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ"
          </div>
        </footer>
      </main>
    </div>
  );
}
