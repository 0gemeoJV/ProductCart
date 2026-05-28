import iconConfirmed from '../../public/images/icon-order-confirmed.svg';
import '../stylesComponents/OrderConfirmedStyle.css';
import OrdinaryButtons from './Buttons/OrdinaryButtons';

function OrderConfirmed({ cartItems }: { cartItems: any[] }) {
    return (
        <div className='order-confirmed-overlay'>
            <div className="order-confirmed">
                <img src={iconConfirmed} alt="Order-confirmed" />
                <div className='order-text'>
                    <h1>Order Confirmed</h1>
                    <p>We hope you enjoy your food!</p>
                </div>
                <div className='added-items-order'>
                    {cartItems.map((item, index) => (
                        <div className='item-card-order' key={index}>
                            <img src={item.image.mobile} alt="Dessert image" className='item-ordered' />
                            <div className='item-details'>
                                <h3 className='item-name'>{item.name}</h3>
                                <div className='item-pricing'>
                                    <span className='item-qty'>{item.quantity}x</span>
                                    <span className='item-price'>@ ${item.price.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className='item-total-order'>
                                <span className='item-total-price'>${(item.quantity * item.price).toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                    <div className='order-total'>
                        <p>Order Total</p>
                        <h2 className='price'> ${cartItems.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)}</h2>
                    </div>
                </div>
                <OrdinaryButtons props="Start New Order" onClick={() => { }} />
            </div>
        </div>
    )
}

export default OrderConfirmed