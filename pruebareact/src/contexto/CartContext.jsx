import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addProduct = (item,newCantidad) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, cantidad: newCantidad});
        setCart(newCart)
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
    }

    const totalProduct = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            addProduct,
            totalPrice,
            totalProduct,
            clearCart,
            isInCart,
            removeProduct,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;