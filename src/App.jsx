import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {
  // Step 2: Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Step 3: Cart Management State
  const [cart, setCart] = useState([]);
  // Step 4: Category Filtering State
  const [category, setCategory] = useState('all');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      {/* Render DarkModeToggle */}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

      {/* Category Filter Dropdown */}
      <div style={{ margin: '20px 0' }}>
        <label>Filter by Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/* Pass state/functions to ProductList */}
      <ProductList selectedCategory={category} onAddToCart={addToCart} />

      {/* Render Cart component */}
      <Cart cartItems={cart} />
    </div>
  );
}

export default App;