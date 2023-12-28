import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexto/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import "./cart.css"

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
            <p> No hay elementos en el carrito</p>
            <Link to='/'>Hacer Compras</Link>
            </>
        );
    }

    return (
        <div className='carritoTotal'>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p className='precio'>
                Total: ${totalPrice()}
            </p>
            <Link to={"/Checkout"}>Terminar la compra</Link>
        </div>
    )
}

export default Cart
