import React from 'react';
import ProductCard from './ProductCard';

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
];

const ProductList = ({ selectedCategory, onAddToCart }) => {
  const filteredProducts = selectedCategory === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(p => p.category === selectedCategory);

  return (
    <div>
      <h2>Available Products</h2>
      
      {/* Logic: If filteredProducts has items, map them. 
         Otherwise, show the "No products available" text.
      */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductList;