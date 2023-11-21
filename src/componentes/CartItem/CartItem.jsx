// CartItem.jsx
import React, { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="cart-item-container">
      <h4 className="product-name">{item.nombre}</h4>
      <p className="quantity">Cantidad: {cantidad}</p>
      <p className="price">Precio: {item.precio}</p>
      <button className="delete-button" onClick={() => eliminarProducto(item.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
