import Button from './Buttons/Button'
import '../../src/stylesComponents/CardStyle.css';

function Cards({ dessert, index }: { dessert: any, index: number }) {
    return (
        <div className='dessert-card' key={index}>
            <div className='img-container'>
                <img src={dessert.image.mobile} alt="dessert-image" className='img-product' />
                <Button />
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