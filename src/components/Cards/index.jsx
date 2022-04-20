import './cards.scss';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart';

export default function Cards({ item }) {
    const { addProducToCart } = useContext(CartContext);


    return (
        <Card className="card_home_item">
            <Card.Img src={item.imagem} className="img_card" alt="Foto do Card" />
            <Card.Body className="card_body">
<<<<<<< HEAD
                <Card.Title className='card_title'>{item.nome}</Card.Title>
                <Card.Text>{item.descricao}</Card.Text>
                <Button onClick={addToCart} className="buton_item">Adicionar</Button>
=======
                <Card.Title className='card_title'>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button onClick={() => addProducToCart(item.id)} className="buton_item">{item.button}</Button>
>>>>>>> befb36286b42e18ae78ea4a2e7e0d79b99e52069
            </Card.Body>
        </Card>
    )
}