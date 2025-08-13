import './App.css'
import "./scss/styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaPrincipal from './pages/PaginaPrincipal.jsx';

function App() {
 
  return (
    <>
     <BrowserRouter>
     <main className="flex-grow-1 d-flex flex-column">
      <Routes>
    <Route path="/" element={<PaginaPrincipal />} />
       </Routes>
     </main>
   </BrowserRouter>
    </>
  )
}

export default App
