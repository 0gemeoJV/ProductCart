import iconAddToCart from '../../../public/images/icon-add-to-cart.svg';
import '../../stylesComponents/ButtonStyles.css';

function Button() {
  return (
    <>
        <button className='add-button'> <img src={iconAddToCart} alt="Add to cart" />Add to Cart</button>
    </>
  )
}

export default Button;