import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home'
import { Alta } from './Pages/Alta';
import { Contacto } from './Pages/Contacto'
import { Nosotros } from './Pages/Nosotros'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const apiUrl = 'https://657f0c529d10ccb465d5d755.mockapi.io/api/products'; 

  


  return (
    <>
      <ToastContainer />
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={<Home
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} />}
        />

        <Route
          path="/alta"
          element={<Alta
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            apiUrl={apiUrl}
          />}
        />


        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      
    </>
  )
}

export default App
