import iconAddToCart from '../../../public/images/icon-add-to-cart.svg';
import '../../stylesComponents/ButtonStyles.css';
import iconIncrement from '../../../public/images/icon-increment-quantity.svg';
import iconDecrement from '../../../public/images/icon-decrement-quantity.svg';

interface ButtonProps {
  updateCart: (dessert: any, quantity: number) => void;
  dessert: any;
  quantity: number;
}

function Button({ updateCart, dessert, quantity }: ButtonProps) {

  const Increment = () => {
    const newQuantity = quantity + 1;
    updateCart(dessert, newQuantity);
  }

  const Decrement = () => {
    const newQuantity = quantity - 1;
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
            <button className='quantity-button' onClick={Decrement}>
              <img src={iconDecrement} alt="Decrement-quantity" />
            </button>
            <span>{quantity}</span>
            <button className='quantity-button' onClick={Increment}>
              <img src={iconIncrement} alt="Increment-quantity" />
            </button>
          </div>
          )
        }   
    </div>
  )
}

export default Button;