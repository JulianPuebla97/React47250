import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    return (
        <div>

            <Link to="/cart">
                <img className='carrito' src="https://static.vecteezy.com/system/resources/previews/000/425/526/original/shopping-cart-icon-vector-illustration.jpg" alt="Carrito de compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }

            </Link>
        </div>
    )
}

export default CartWidget