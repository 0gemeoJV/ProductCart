import iconAddToCart from '../../assets/images/icon-add-to-cart.svg';

function Button() {
  return (
    <>
        <button className='add-button'> <img src={iconAddToCart} alt="Add to cart" />Add to Cart</button>
    </>
  )
}

export default Button;