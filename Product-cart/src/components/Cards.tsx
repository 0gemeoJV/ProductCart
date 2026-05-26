import Button from './Buttons/Button'
import '../../src/stylesComponents/CardStyle.css';

interface CardsProps {
    dessert: any;
    index: number;
    updateCart: (dessert: any, quantity: number) => void;
    cartItems: any[]; 
}

function Cards({ dessert, index, updateCart, cartItems }: CardsProps) {
    // 🔍 Procura a quantidade atual deste item no carrinho
    const cartItem = cartItems.find(item => item.name === dessert.name);
    const currentQuantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className='dessert-card' key={index}>
            <div className='img-container'>
                <img src={dessert.image.mobile} alt="dessert-image" className='img-product' />
                <Button updateCart={updateCart} dessert={dessert} quantity={currentQuantity} />
            </div>
            <div className='description-card'>
                <p className='category'>{dessert.category}</p>
                <p className='name'>{dessert.name}</p>
                <p className='price'>${dessert.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Cards