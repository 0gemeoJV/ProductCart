import emptyCart from '/images/illustration-empty-cart.svg'
import carbonNeutralIcon from '/images/icon-carbon-neutral.svg'
import '../stylesComponents/YourCartStyle.css';
import ItemCard from './ItemCard';
import OrdinaryButtons from './Buttons/OrdinaryButtons';

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
                    <div className='price-order'>
                        <p>Order Total:</p>
                        <h2 className='price'> ${cartItems.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)}</h2>
                    </div>
                    <div className='carbon-neutral-msg'>
                        <img src={carbonNeutralIcon} alt="Carbon neutral icon" className='carbon-neutral-icon' />
                        <p>This is a <span className='carbon-neutral'>carbon-neutral</span> delivery</p>
                    </div>
                    <OrdinaryButtons props="Confirm Order" />
                </div>
            )}
        </>
    )
}

export default YourCart