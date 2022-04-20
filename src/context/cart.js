import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [productsCart, setProdutsCart] = useState([]);

    //{id;1 qtd:1}

    function addProducToCart(id) {
        const copyProductsCart = [...productsCart];

        const item = copyProductsCart.filter((product) => product.id === id);
        if (item.length > 0) {
            item[0].qtd = item[0].qtd + 1;
        } else {
            copyProductsCart.push({ id: id, qtd: 1 });
        }
        setProdutsCart(copyProductsCart);

    }

    return (
        <CartContext.Provider value={{ productsCart, addProducToCart }}>
            {children}
        </CartContext.Provider>
    );
}