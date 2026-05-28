import './App.css'
import './Responsive.css'
import data from './data.json'
import Cards from './components/Cards'
import YourCart from './components/YourCart'
import { useState } from 'react'
import OrderConfirmed from './components/OrderConfirmed'

function App() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const resetCart = () => {
    setCartItems([]);
    setOrderConfirmed(false);
  };

  const updateCart = (dessert: any, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === dessert.name);

      if (quantity === 0) {
        return prevItems.filter(item => item.name !== dessert.name);
      }

      if (existingItem) {
        return prevItems.map(item =>
          item.name === dessert.name ? { ...item, quantity } : item
        );
      }

      return [...prevItems, { ...dessert, quantity }];
    });
  };

  return (
    <main className="App">
      <section className='desserts-sections'>
        <h1>Desserts</h1>
        <div className='desserts-grids'>
          {data.map((dessert, index) => (
            <Cards
              key={index}
              dessert={dessert}
              index={index}
              updateCart={updateCart}
              cartItems={cartItems} 
            />
          ))}
        </div>
      </section>
      <section className='your-cart-section'>
          <h1>Your Cart({cartItems.reduce((total, item) => total + item.quantity, 0)})</h1>
          <YourCart cartItems={cartItems} setCartItems={setCartItems} updateCart={updateCart} setOrderConfirmed={setOrderConfirmed} />
      </section>
      {
        orderConfirmed && <OrderConfirmed cartItems={cartItems} resetCart={resetCart} />
      }
    </main>
  )
}

export default App