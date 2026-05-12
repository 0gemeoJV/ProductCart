import Button from './Buttons/Button'
import '../../src/stylesComponents/CardStyle.css';

function Cards({ dessert, index }: { dessert: any, index: number }) {
    return (
        <div className='dessert-card' key={index}>
            <img src={dessert.image.mobile} alt="dessert-image" className='img-product'/>
            <Button />
            <p>{dessert.category}</p>
            <p>{dessert.name}</p>
        </div>
    )
}

export default Cards