import iconAddToCart from '../../../public/images/icon-add-to-cart.svg';
import '../../stylesComponents/ButtonStyles.css';
import { useState } from 'react';

function Button() {
  const [isActive, setIsActive] = useState(false);

  /*criar função para adicionar ao carrinho*/
  const handleClick = () =>{
    setIsActive(!isActive);
  }

  return (
    <>
        <button className={`add-button ${isActive ? "active" : ""}`} onClick={handleClick}> <img src={iconAddToCart} alt="Add to cart" />Add to Cart</button>
    </>
  )
}

export default Button;