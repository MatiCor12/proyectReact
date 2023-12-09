import React, {useState, createContext} from 'react';
export const CartContext = createContext()


export const CartProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const addToCart = (producto, cantidad) => {
        if(!isInCart(producto.id)){
            setCart((prev) => [...prev,{producto, cantidad}])
        }else{
            console.log("Nose peude agregar mas")
        }
    }

    const isInCart = (itemId) => {
        return cart.some((i) => i.item.id === itemId)
    }

    const itemTotal = () => {
        let cant = 0
        cart.forEach((e) => cant += e.cantidad)
        return cant
    }

    const eliminar = (id) => {
        const filtrarCarrito = cart.filter((item) => item.producto.id !== id)
        setCart(filtrarCarrito)
    }

    const limpiarCarro = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                isInCart,
                itemTotal,
                eliminar,
                limpiarCarro,
            }
        }>
            {children}
        </CartContext.Provider>
    );
};
