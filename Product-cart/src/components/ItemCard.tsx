import removeIcon from '/images/icon-remove-item.svg'
import '../stylesComponents/ItemCard.css';

function ItemCard({ item, index }: { item: any; index: number }) {
    return (
        <div className='item-card' key={index}>
            <div className='item-details'>
                <h3 className='item-name'>{item.name}</h3>
                <div className='item-pricing'>
                    <span className='item-qty'>{item.quantity}x</span>
                    <span className='item-price'>@ ${item.price.toFixed(2)}</span>
                    <span className='item-total-price'>${(item.quantity * item.price).toFixed(2)}</span>
                </div>
            </div>
            <img src={removeIcon} alt="Remove item" className='remove-icon' />
        </div>
    )
}

export default ItemCard