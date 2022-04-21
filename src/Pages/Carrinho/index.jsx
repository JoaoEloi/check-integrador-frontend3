import "./carrinho.scss";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
import { CardsInfo } from "../../data";
import Cards from "../../components/Cards";

export default function Carrinho() {
  const { productsCart } = useContext(CartContext);

  const [products] = useState(CardsInfo);
  return (
    <div className="container_carrinho">
      <div className="title">
        <h1>Seus Produtos</h1>
        {/* <p>{JSON.stringify(productsCart)}</p> */}
      </div>
      {products.map((product) => (
        <div className="carrinho" key={product.id}>
          <img src={product.image} />
          <div className="container_carrinho_item">
            <h2>{product.title}</h2>
            <h3>R${product.price},00</h3>
            <h3>
              {productsCart.find((item) => item.id === product.id)?.qtd
                ? productsCart.find((item) => item.id === product.id)?.qtd
                : 0}
            </h3>
            {/* <button onClick={() => addProducToCart(product.id)}>+</button>
                        <button onClick={() => removeProductToCart(product.id)}>-</button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
