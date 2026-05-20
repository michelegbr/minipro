import { Link } from 'react-router-dom';

export default function Course() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">
      {/* Navigation */}
      <nav className="w-full py-5 px-6 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-montserrat font-extrabold text-xl tracking-tight">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
            </div>
            EduMaster
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-semibold text-emerald-500 hover:text-emerald-600 transition-colors">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Course Detail Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Course Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100">
                BEGINNER COURSE
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold mt-3 text-slate-900 leading-tight">
                Web Development Fundamentals
              </h1>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Pelajari fondasi utama pembuatan website dari nol. Kelas ini dirancang khusus untuk pemula yang ingin menguasai HTML5, CSS3, dan dasar-dasar JavaScript hingga mampu membuat website responsif sendiri.
              </p>
            </div>

            {/* Video Placeholder / Image Card */}
            <div className="aspect-video bg-[#1f291e] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center relative group">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Web Dev" className="object-cover w-full h-full opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-emerald-400 active:scale-95 transition-all">
                  <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </button>
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6 text-slate-900">Kurikulum Kelas</h2>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center border border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-emerald-100 text-emerald-600 font-bold rounded-lg text-xs flex items-center justify-center">1</span>
                    <span className="font-semibold text-sm text-slate-800">Pengenalan HTML5 & Struktur Web</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">45 Menit</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center border border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-emerald-100 text-emerald-600 font-bold rounded-lg text-xs flex items-center justify-center">2</span>
                    <span className="font-semibold text-sm text-slate-800">Styling dengan CSS3 & Flexbox</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">60 Menit</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center border border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-emerald-100 text-emerald-600 font-bold rounded-lg text-xs flex items-center justify-center">3</span>
                    <span className="font-semibold text-sm text-slate-800">Dasar JavaScript & Manipulasi DOM</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">90 Menit</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl flex justify-between items-center border border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-emerald-100 text-emerald-600 font-bold rounded-lg text-xs flex items-center justify-center">4</span>
                    <span className="font-semibold text-sm text-slate-800">Project Akhir: Membangun Landing Page</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">120 Menit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm sticky top-28">
              <div className="mb-4">
                <span className="text-xs font-semibold text-slate-400 line-through">Rp 499.000</span>
                <div className="text-3xl font-extrabold text-slate-900 mt-1">Rp 199.000</div>
              </div>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-xl transition shadow-md active:scale-95 mb-6">
                Beli Kelas Sekarang
              </button>
              
              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Termasuk di Dalam Kelas:</h4>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    Akses Selamanya (Lifetime)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    Source Code Lengkap Project
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    Sertifikat Kelulusan Resmi
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}