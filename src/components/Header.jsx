import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';
import { IoMdCart } from "react-icons/io";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiBearHead, } from "react-icons/gi";

export const Header = ({ allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <header>
      <Link to="/">
        <h1 className='tittle'><GiBearHead />Pichi-Gamez</h1>
      </Link>
      
      <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        
        <Link to="/">Home</Link>
        <Link to="/alta">Alta</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/nosotros">Nosotros</Link>
      </nav>

      <div className="container-icon">
        <div className="container-cart-icon" onClick={openCartModal}>
          <IoMdCart size={34} />
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
      </div>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </header>
  );
};

export default Header;



