import Button from './Buttons/Button'
import '../../src/stylesComponents/CardStyle.css';

function Cards({ dessert, index, updateCart }: { dessert: any, index: number, updateCart: (dessert: any, quantity: number) => void }) {
    return (
        <div className='dessert-card' key={index}>
            <div className='img-container'>
                <img src={dessert.image.mobile} alt="dessert-image" className='img-product' />
                <Button updateCart={updateCart} dessert={dessert} />
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