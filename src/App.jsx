import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import axios from "axios"
import Organization from './pages/Organization'
import Assets from './pages/Assets'
import Trade from './pages/Trade'
import History from './pages/History'
import Wallet from './pages/Wallet'

axios.defaults.baseURL = "http://localhost:4000"
axios.defaults.withCredentials = true;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/organization" element={<Organization />} />
                    <Route path="/assets" element={<Assets />} />
                    <Route path="/trade" element={<Trade />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/wallet" element={<Wallet />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App
