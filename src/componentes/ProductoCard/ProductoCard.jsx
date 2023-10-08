import React from 'react'
import './ProductoCard.css';
import NavBar from '../NavBar/NavBar';
import ProductoGrid from '../ProductoGrid/ProductoGrid';
import CartWidget from '../CartWidget/CartWidget';

const ProductoCard = () => {
    return (
        <div className='product-card'>
            <NavBar/>
            <CartWidget/>
            <ProductoGrid/>
        </div>
    )
}

export default ProductoCard