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
                <Card.Title className='card_title'>{item.nome}</Card.Title>
                <Card.Text>{item.descricao}</Card.Text>
                <Button /*onClick={}*/ className="buton_item">Adicionar</Button>
            </Card.Body>
        </Card>
    )
}