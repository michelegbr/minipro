import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Course from './pages/Course'
import Dashboard from './pages/Dashboard' // Import Dashboard baru
import UserDetail from './pages/UserDetail'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Semua halaman terproteksi */}
      <Route path="/" element={ <ProtectedRoute><Home /></ProtectedRoute> } /> 
      <Route path="/course" element={ <ProtectedRoute><Course /></ProtectedRoute> } />
      <Route path="/users" element={ <ProtectedRoute><Dashboard /></ProtectedRoute> } />
      <Route path="/users/:id" element={ <ProtectedRoute><UserDetail /></ProtectedRoute> } />
    </Routes>
  )
}

export default App