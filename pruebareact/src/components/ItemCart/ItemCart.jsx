import React from 'react';
import { useCartContext } from '../../contexto/CartContext';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div>
            <img src={product.img} alt={product.nombre}/>
            <div>
                <p>{product.nombre}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio por unidad: {product.precio}</p>
                <p>Subtotal: ${product.cantidad * product.precio} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;