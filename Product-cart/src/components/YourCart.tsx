import emptyCart from '/images/illustration-empty-cart.svg'
import '../stylesComponents/YourCartStyle.css';
import ItemCard from './ItemCard';


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
                        <ItemCard key={index} item={item} index={index} />
                    ))}
                    <p>Total items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
                    <p>Order Total: ${cartItems.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)}</p>
                    
                </div>
            )}
        </>
    )
}

export default YourCart