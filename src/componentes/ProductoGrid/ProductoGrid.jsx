import React from 'react';
import './ProductoGrid.css'; // Importa tu archivo CSS

const productos = [
    {
        id: 1,
        nombre: 'Calleras Cobra',
        precio: '$7500',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_934676-MLA51656385026_092022-F.webp",
    },
    {
        id: 2,
        nombre: 'Muñequeras PowerGrip',
        precio: '$3500',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_647342-MLA71259058204_082023-F.webp",
    },
    {
        id: 3,
        nombre: 'Soga Speed Rope Aluminio',
        precio: '$5000',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_911889-MLA41798403479_052020-F.webp",
    },
    {
        id: 4,
        nombre: 'Cinturón Lumbar Crossfit',
        precio: '$9000',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_918878-MLA70486175523_072023-F.webp",
    },
    {
        id: 5,
        nombre: 'Pelota de ejercicio',
        precio: '$5000',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_650447-MLA31115685820_062019-F.webp",
    },
    {
        id: 6,
        nombre: 'Chaleco 12kg',
        precio: '$12000',
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_612396-MLA51641334639_092022-F.webp",
    },
];

const ProductoGrid = () => {
    return (
        <div className="product-grid">
            {productos.map((producto) => (
                <div className="product" key={producto.id}>
                    <div>
                        <img className="product-image" src={producto.imagen} alt={producto.nombre} />
                    </div>
                    <h3 className="product-name">{producto.nombre}</h3>
                    <p className="product-price">{producto.precio}</p>
                    <button className="add-to-cart-button">Agregar al Carrito</button>
                </div>
            ))}
        </div>
    );
}

export default ProductoGrid;
