import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetail();
  }, [id]);

  const fetchDetail = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data.data || response.data);
    } catch (error) {
      console.error("Gagal fetch detail user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 flex justify-center items-start pt-20">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md text-center">
        {loading ? (
          <p className="text-slate-500">Memuat profil...</p>
        ) : user ? (
          <>
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-1">{user.name}</h2>
            <p className="text-slate-500 mb-6">{user.email}</p>
            
            <div className="bg-slate-50 p-4 rounded-xl text-left border border-slate-100 mb-6 space-y-2">
              <p className="text-sm"><span className="font-semibold text-slate-700">User ID:</span> {user.id}</p>
              <p className="text-sm"><span className="font-semibold text-slate-700">Bergabung pada:</span> {user.created_at ? new Date(user.created_at).toLocaleDateString('id-ID') : '-'}</p>
            </div>
          </>
        ) : (
          <p className="text-red-500">User tidak ditemukan.</p>
        )}
        
        <Link to="/users" className="block w-full text-center bg-slate-800 text-white py-2.5 rounded-lg font-bold hover:bg-slate-700 transition">
          Kembali ke Daftar User
        </Link>
      </div>
    </div>
  );
}