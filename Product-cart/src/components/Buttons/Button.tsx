import iconAddToCart from '../../../public/images/icon-add-to-cart.svg';
import '../../stylesComponents/ButtonStyles.css';
import { useState } from 'react';

function Button() {
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(0);

  /*criar função para adicionar ao carrinho*/
  const handleClick = () =>{
    setIsActive(!isActive);
    setQuantity(quantity + 1);
    console.log(`Produto adicionado ao carrinho. Quantidade: ${quantity + 1}`);

  }

  return (
    
    <>
        { quantity === 0 ? (
          <button className='add-button' onClick={handleClick}>
            <img src={iconAddToCart} alt="Add-to-cart"/>
            Add to Cart
          </button>
        ) : (
          <div className='quantity-selector'>
            <button onClick={()=> setQuantity(q => q - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={()=> setQuantity(q => q + 1)}>+</button>
          </div>
          )
        }   
    </>
  )
}

export default Button;