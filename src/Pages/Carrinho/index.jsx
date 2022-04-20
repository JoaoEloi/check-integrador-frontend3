import './carrinho.css';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart';

export default function Carrinho() {
    const { productsCart } = useContext(CartContext);
    return (
        <>
            <div className="title">
                <h1>Seus Produtos</h1>
                <p>{JSON.stringify(productsCart)}</p>
            </div>
        </>
    )
}