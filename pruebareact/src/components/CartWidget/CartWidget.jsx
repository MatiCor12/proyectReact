import React, { useContext } from 'react';
import { CartContext } from '../../contexto/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {itemTotal} = useContext(CartContext)
    return (
        <div>
            <Link to='/Cart'>
            <p>Carrito</p>
            </Link>
            <p>{itemTotal()}</p>
        </div>
    )
}

export default CartWidget;