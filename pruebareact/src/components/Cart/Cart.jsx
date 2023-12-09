import React, {useContext} from 'react';
import { CartContext } from '../../contexto/CartContext';
import Item from '../Item/Item';

const Cart = () => {
    const {cart, limpiarCarro, eliminar} = useContext(CartContext)
    return (
        <div>
            <h1>Carrito</h1>
            <ul>
                {
                    cart.length > 0 ? (
                        cart.map((item) =>{
                        return <li>
                            <Item product={item.producto}/>
                            <button onClick={() => eliminar(item.producto.id)}>Borrar producto</button>
                        </li>
                })
                ) : (
                    <h4>No agregaste productos....</h4>
                )
            }
            </ul>
            <button onClick={limpiarCarro}>Vaciar Carrito</button>
        </div>
    );
};

export default Cart;