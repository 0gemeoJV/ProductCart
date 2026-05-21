import iconConfirmed from '../../public/images/icon-order-confirmed.svg';
import '../stylesComponents/OrderConfirmedStyle.css';
function OrderConfirmed() {
    return (
        <div className="order-confirmed">
            <img src={iconConfirmed} alt="Order-confirmed" />
            <div className='order-text'>
                <h1>Order Confirmed</h1>
                <p>We hope you enjoy your food!</p>
            </div>
        </div>
    )
}

export default OrderConfirmed