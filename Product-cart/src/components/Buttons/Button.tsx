import iconAddToCart from '../../../public/images/icon-add-to-cart.svg';
import '../../stylesComponents/ButtonStyles.css';
import { useState } from 'react';

function Button({ updateCart, dessert }: { updateCart: (dessert: any, quantity: number) => void, dessert: any }) {
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const Increment = () =>{
    setIsActive(!isActive);
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(dessert, newQuantity);
  }

  const Decrement = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    updateCart(dessert, newQuantity);
  }

  return (
    
    <div className='button-container'>
        { quantity === 0 ? (
          <button className='add-button' onClick={Increment}>
            <img src={iconAddToCart} alt="Add-to-cart"/>
            Add to Cart
          </button>
        ) : (
          <div className='quantity-selector'>
            <button className='quantity-button' onClick={Decrement}>-</button>
            <span>{quantity}</span>
            <button className='quantity-button' onClick={Increment}>+</button>
          </div>
          )
        }   
    </div>
  )
}

export default Button;