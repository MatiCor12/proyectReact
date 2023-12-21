import React from 'react';
import { useCartContext } from '../../contexto/CartContext';

const CartWidget = () => {
    const {totalProduct} = useCartContext();
    return (
        <>
        <i className="bi bi-cart3"></i>
        <span>{totalProduct() || ''}</span>
        </>
    );
}

export default CartWidget;