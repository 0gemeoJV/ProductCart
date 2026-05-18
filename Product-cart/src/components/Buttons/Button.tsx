import iconAddToCart from '../../../public/images/icon-add-to-cart.svg';
import '../../stylesComponents/ButtonStyles.css';
import { useState } from 'react';

function Button({ updateCart, dessert }: { updateCart: (dessert: any, quantity: number) => void, dessert: any }) {
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(0);

  /*criar função para adicionar ao carrinho*/
  const handleClick = () =>{
    setIsActive(!isActive);
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(dessert, newQuantity);
    console.log(`Added ${dessert.name} to cart. Quantity: ${newQuantity}`);
  }

  return (
    
    <div className='button-container'>
        { quantity === 0 ? (
          <button className='add-button' onClick={handleClick}>
            <img src={iconAddToCart} alt="Add-to-cart"/>
            Add to Cart
          </button>
        ) : (
          <div className='quantity-selector'>
            <button className='quantity-button' onClick={()=> setQuantity(q => q - 1)}>-</button>
            <span>{quantity}</span>
            <button className='quantity-button' onClick={()=> setQuantity(q => q + 1)}>+</button>
          </div>
          )
        }   
    </div>
  )
}

export default Button;