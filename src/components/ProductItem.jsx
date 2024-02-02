import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductItem.css'
function ProductItem() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setSelectedPrice(data.price); // Initialize selectedPrice with the product's default price
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  useEffect(() => {
    setTotalPrice(selectedPrice * selectedQty);
  }, [selectedPrice, selectedQty]);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    if (e.target.value === 'S') {
      setSelectedPrice(10);
    } else if (e.target.value === 'M') {
      setSelectedPrice(15);
    } else if (e.target.value === 'L') {
      setSelectedPrice(20);
    }
  };

  const handleQtyChange = (e) => {
    setSelectedQty(e.target.value);
  };

  const handleAddToCart = () => {
    console.log('Product added to cart:', product);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-1">
      <div className="row">
        <div className="col1">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col2">
          <h2>{product.title}</h2>
          <p>Price: ${selectedPrice}</p>
          <label htmlFor="size-select">Size:</label>
          <select id="size-select" value={selectedSize} onChange={handleSizeChange}>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
          <label htmlFor="qty-select">Quantity:</label>
          <select id="qty-select" value={selectedQty} onChange={handleQtyChange}>
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
