// import logo from './logo.svg';
import './App.css';
import ManajemenBuku from './components/ManajemenBuku';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hello from './components/Hello';

function App() {
  return (
    <div>
      <Router>

        <Navbar />
          <Routes>
            <Route path="/hello"  element={<Hello />} >
            </Route>

            <Route path="/manajemen-buku" element={<ManajemenBuku />} >
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
