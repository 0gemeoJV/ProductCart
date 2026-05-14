import emptyCart from '/images/illustration-empty-cart.svg'
import { useState } from 'react';
import '../stylesComponents/YourCartStyle.css';

function YourCart() {
    const [quantity, setQuantity] = useState(0);

    return (
        <>
            {quantity === 0 ? (
                <div className='added-items'>
                    <img src={emptyCart} alt="Empty cart" />
                    <p>Your added items will appear here</p>
                </div>
            ) : (
                <div className='added-items'>
                    <p>Items in your cart:</p>
                    <button onClick={() => setQuantity(0)}>Clear Cart</button>
                    <p>{quantity}</p>
                </div>
            )}
        </>
    )
}

export default YourCart