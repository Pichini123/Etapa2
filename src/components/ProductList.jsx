import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal, addNewProduct }) => {
  const apiUrl = 'https://657f0c529d10ccb465d5d755.mockapi.io/api/products';
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const onAddProduct = (product) => {
    if (allProducts.find(item => item.id === product.id)) {
      const products = allProducts.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setAllProducts([...products]);
    } else {
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setAllProducts([...allProducts, product]);
    }
    toast.success(`${product.nameProduct} Añadido`, { position: toast.POSITION.TOP_RIGHT });
  };

  const onAddNewProduct = async (newProduct) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to add new product');
      }

      // Después de agregar el producto en la API, actualiza el estado local si es necesario.
      setTotal(total + newProduct.price * newProduct.quantity);
      setCountProducts(countProducts + newProduct.quantity);
      setAllProducts([...allProducts, newProduct]);

      toast.success(`${newProduct.nameProduct} Añadido`, { position: toast.POSITION.TOP_RIGHT });
    } catch (error) {
      console.error('Error adding new product:', error);
      toast.error('Error al agregar el nuevo producto', { position: toast.POSITION.TOP_RIGHT });
    }
  };

  return (
    <div className='container-items'>
      {apiData.map(product => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.urlImage} alt={product.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            
            
            <p className='description'>{product.description} </p>
            <p className="price">$ {product.price}</p>
            <button onClick={() => onAddProduct(product)} className="btn-add-cart">
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
