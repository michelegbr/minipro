import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-brand-green selection:text-white min-h-screen">
      {/* Navigation */}
      <nav className="w-full py-5 px-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-900 tracking-tight">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
            </div>
            EduMaster
          </div>
          
          <div className="flex items-center gap-8">
            <ul className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <li><Link to="/" className="text-emerald-500 font-bold transition-colors">Home</Link></li>
              <li><Link to="/users" className="hover:text-emerald-500 transition-colors font-semibold">Daftar Users</Link></li>
              <li><a href="#courses" className="hover:text-emerald-500 transition-colors">Courses</a></li>
            </ul>
            <button 
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/login');
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-4 mb-20 mt-6">
        <div className="bg-[#1f291e] rounded-[2rem] md:rounded-[3rem] px-6 py-20 md:py-32 text-center text-white relative overflow-hidden shadow-2xl isolate group">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-md">
            Unlock Your Potential<br className="hidden md:block" /> with EduMaster
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-200 mb-10 leading-relaxed font-light">
            Embark on a journey of knowledge and skill development. Build real-world projects, master modern stacks, and elevate your career.
          </p>
          <a href="#courses" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 hover:-translate-y-1">
            Explore Courses
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <section id="courses" className="mb-24">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-slate-900">Featured Courses</h2>
              <p className="text-slate-500">Level up your skills with our top-rated programs.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link to="/course" className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col text-left">
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Web Development" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full text-slate-800 shadow-sm border border-slate-100">BEGINNER</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-500 transition-colors">Web Development Fundamentals</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">Learn the basics of HTML, CSS, and JavaScript to build your very first interactive website.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <span className="font-bold text-slate-900">Rp 199.000</span>
                  <span className="text-xs font-medium text-slate-400">12 Hrs</span>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/course" className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col text-left">
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="JavaScript" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full text-slate-800 shadow-sm border border-slate-100">INTERMEDIATE</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-500 transition-colors">Advanced JavaScript & DOM</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">Dive deep into JS concepts like Async/Await, closures, APIs, and modern ES6+ features.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <span className="font-bold text-slate-900">Rp 299.000</span>
                  <span className="text-xs font-medium text-slate-400">18 Hrs</span>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/course" className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col text-left">
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-200">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Responsive Design" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full text-slate-800 shadow-sm border border-slate-100">ALL LEVELS</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-500 transition-colors">Responsive UI/UX Mastery</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">Master the art of creating stunning layouts with CSS Grid, Flexbox, and Tailwind CSS.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <span className="font-bold text-slate-900">Rp 249.000</span>
                  <span className="text-xs font-medium text-slate-400">15 Hrs</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}