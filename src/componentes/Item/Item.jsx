import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({id,nombre,precio,img,stock}) => {
    return (
        <div className="product-grid">
            <div className="product">
                <div>
                    <img src={img} alt={nombre} className="product-image" />
                </div>
                <h3 className="product-name">Nombre: {nombre}</h3>
                <p className="product-price">Precio: {precio} </p>
                <p>ID {id}</p>
                <p>Stock: {stock} </p>
                <Link to={`/item/${id}`} className='detalles-product'> Ver Detalles</Link>
                

                
            </div>
        </div>
    )
}
export default Item;