import './cards.scss'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap';


export default function Cards({ item }) {
    const addToCart = () => {
        console.log("Adicionado!")
    }
    
    return (
        <Card className="card_home_item">
            <Card.Img src={item.imagem} className="img_card" alt="Foto do Card" />
            <Card.Body className="card_body">
                <Card.Title className='card_title'>{item.nome}</Card.Title>
                <Card.Text>{item.descricao}</Card.Text>
                <Button onClick={addToCart} className="buton_item">Adicionar</Button>
            </Card.Body>
        </Card>
    )
}