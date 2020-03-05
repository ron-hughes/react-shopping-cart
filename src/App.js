import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// step 2 import context objects into app
import { ProductContext } from './contexts/ProductContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart

		setCart([...cart,item])
	};

	const removeItem = itemId => {
		const newItems = cart.filter( item => item.id !== itemId )
		setCart([...newItems])

	}

	return (
		<ProductContext.Provider value={{ products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
		<div className="App">
			<Navigation />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
			/>

			<Route
				path="/cart"
				component={ShoppingCart}
			/>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
