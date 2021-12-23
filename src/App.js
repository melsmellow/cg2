import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// components

// pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </Router>
  );
}

export default App;