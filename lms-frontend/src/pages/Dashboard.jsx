import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/users?page=${page}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(response.data.data.data || response.data.data || response.data);
        setTotalPages(response.data.data.last_page || response.data.last_page || 1);
      } catch (err) {
        console.error("Gagal mengambil data user:", err);
      }
    };
    fetchUsers();
  }, [page]);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <nav className="w-full py-5 px-6 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl text-emerald-600">EduMaster Admin Dashboard</div>
          <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-emerald-600">&larr; Kembali ke Home</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Daftar Pengguna Sistem (List Users)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {users.map((user) => (
            <div key={user.id} onClick={() => navigate(`/users/${user.id}`)} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <h3 className="font-bold text-lg text-slate-900">{user.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{user.email}</p>
              <span className="inline-block mt-4 text-xs font-semibold text-emerald-600">Lihat Detail Akun &rarr;</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 border-t border-slate-200 pt-6">
          <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)} className="px-4 py-2 bg-slate-200 rounded-lg text-sm font-medium disabled:opacity-50">Previous</button>
          <span className="text-sm text-slate-600 font-medium">Halaman {page} dari {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)} className="px-4 py-2 bg-slate-200 rounded-lg text-sm font-medium disabled:opacity-50">Next</button>
        </div>
      </main>
    </div>
  );
}