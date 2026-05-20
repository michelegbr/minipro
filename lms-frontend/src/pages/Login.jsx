import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    console.log("=== PROSES LOGIN DIMULAI ===");
    console.log("Email yang diinput:", email);

    try {
      // Tembak API Laravel
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email: email,
        password: password
      });

      console.log("1. Berhasil connect ke Laravel!");
      console.log("2. Data response utuh:", response.data);

      // Ambil token dari response (cek semua kemungkinan nama property)
      let token = null;
      if (response.data) {
        token = response.data.token || response.data.plainTextToken;
      }

      console.log("3. Token yang didapat:", token);

      if (token) {
        localStorage.setItem('token', token);
        console.log("4. Token sukses disimpan di localStorage!");
        console.log("5. Mencoba pindah ke halaman utama (/) ...");
        navigate('/');
      } else {
        console.error("4. ERROR: Login sukses tapi token kosong/tidak sesuai struktur.");
        setError('Gagal membaca token dari server.');
      }

    } catch (err) {
      console.error("=== LOGIN GAGAL ===");
      console.error("Detail error:", err);
      setError(err.response?.data?.message || 'Login gagal, periksa email dan password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login LMS</h2>
        
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Masuk
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm text-gray-600">
          Belum punya akun? <Link to="/register" className="text-blue-600 hover:underline">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
}