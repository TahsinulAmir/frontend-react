// import logo from './logo.svg';
import './App.css';
import ManajemenBuku from './components/ManajemenBuku';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hello from './components/Hello';
import { useState } from "react";

function App() {
  const [ books, setBooks] = useState([{ _id:1, judul: "Laskar Pelangi", stok:7}]);
  return (
    <div>
      <Router>

        <Navbar />
          <Routes>
            <Route path="/hello"  element={<Hello />} >
            </Route>

            <Route path="/manajemen-buku" element={<ManajemenBuku bookList={books} />} >
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
