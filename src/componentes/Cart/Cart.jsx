
import React, { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <div className="carrito-inicio">
                    <h2>No hay productos en el carrito. Compra o vete! </h2>
                    <button><Link to="/" className=" carrito-boton">Ver Productos</Link></button>
                </div>
            </>
        );
    }

    return (
        <div className="carrito-check">
            {carrito.map((producto) => (
                <CartItem key={producto.item.id} {...producto} />
            ))}
            <h3 className="total">Total: ${total}</h3>
            <h3 className="cantidad-total">Cantidad Total: {cantidadTotal}</h3>
            <button onClick={() => vaciarCarrito()} className="button-vaciar">
                Vaciar Carrito
            </button>
            <button className="button-finalizar">
                <Link to="/checkout">Finalizar Compra</Link>
            </button>
        </div>
    );
};

export default Cart;
