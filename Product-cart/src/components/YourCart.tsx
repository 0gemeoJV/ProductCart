import emptyCart from '/images/illustration-empty-cart.svg'
import '../stylesComponents/YourCartStyle.css';

function YourCart({ cartItems }: { cartItems: any[] }) {
    console.log(cartItems);

    return (
        <>
            {cartItems.length === 0 ? (
                <div className='added-items'>
                    <img src={emptyCart} alt="Empty cart" />
                    <p>Your added items will appear here</p>
                </div>
            ) : (
                <div className='added-items'>
                    {cartItems.map((item, index) => (
                        <div className='item-details' key={index}>
                            <h3>{item.name}</h3>
                            <div className='item-pricing'>
                                <span className='item-qty'>{item.quantity}x</span>
                                <span className='item-price'>${item.price.toFixed(2)}</span>
                                <span className='item-total-price'>${(item.quantity * item.price).toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                    <p>Total items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
                    <p>Order Total: ${cartItems.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)}</p>
                </div>
            )}
        </>
    )
}

export default YourCart