import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container" >
      <div className="row"  >
        {products.map(product => (
          <div key={product.id} className="col-md-3 mb-4" >
            <Link to={`/products/${product.id}`} className="card-link">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.title} style={{ width: '100px', height: '100px' }}/>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Category: {product.category}</p>
                  <p className="card-text">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
