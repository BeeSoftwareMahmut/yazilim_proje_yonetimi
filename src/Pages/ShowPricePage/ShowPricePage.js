import React, { useContext, useState } from 'react';
import '../../Styles/ShowPricePage.css'; 
import ProductsContext from '../../Context/ProuductsContext';

const ShowPricePage=()=>{

    const {products}=useContext(ProductsContext);

    const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  
      return (
        <div className="product-list-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Ürün ara..."
            className="search-input"
          />
          <ul className="product-list">
            {filteredProducts.map((product,index) => (
              <li key={index}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p>{product.price || product.price_per_kg} $</p>
                {
                  product.barcode !==null ?(
                    <p>Stok: {product.stock} Adet</p>
                  ):<p>Stok: {product.stock_kg} Kg</p>
                }
                {
                  product.barcode !==null ?(
                    <p>Barkod: {product.barcode}</p>
                  ):""
                }
               
              </li>
            ))}
          </ul>
        </div>
      );
    };
    

export default ShowPricePage;