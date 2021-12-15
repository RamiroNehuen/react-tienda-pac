import React from "react";
import { useState } from "react";
import { useContext } from "react";

const CartContext = React.createContext ();

export function CartContextP ({children}) {
    const [cartItems, setCartItems] = useState ([]);

    const isOnCart = (product) => {
    
        return cartItems?.findIndex(item => item.id === product.id) !== -1
    }


    const addItem = (product, number) => {

        product.quantity = number
        
        if(!isOnCart(product)) {
            setCartItems (cartItems.concat(product))
            
        }
    }

    const addOnCart = (productId) => {
        const product = cartItems.find(product => product.id === productId)

        product.quantity += 1

        setCartItems([...cartItems])
    }

    const restOnCart = (productId) => {
        const product = cartItems.find(product => product.id === productId)

        product.quantity -= 1

        setCartItems([...cartItems])
    }

    const removeItem = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id))
    }

    const clearAll = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider value={ { cartItems, addItem, removeItem, clearAll, addOnCart, restOnCart } }>
            {children}
        </CartContext.Provider>
    )
}
export function useAddItem (){
    return useContext(CartContext).addItem
}

export function useRemoveItem () {
    return useContext(CartContext).removeItem
}

export function useClearAll(){
    return useContext(CartContext).clearAll
}

export function useAddOnCart(){
    return useContext(CartContext).addOnCart
}

export function useRestOnCart(){
    return useContext(CartContext).restOnCart
}

export default CartContext;