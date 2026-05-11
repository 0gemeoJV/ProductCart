import React from 'react'
import Button from './Buttons/Button'

function Cards({ dessert, index }: { dessert: any, index: number }) {
    return (
        <div className='dessert-card' key={index}>
            <p>{dessert.name}</p>
            <img src={dessert.image.mobile} alt="dessert-image" />
            <Button />
        </div>
    )
}

export default Cards