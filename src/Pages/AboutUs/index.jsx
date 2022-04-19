import './aboutus.scss'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap';


export default function AboutUs() {
    return (
        
        <div className="conteiner_aboutUs">
        <div className="title">
            <h1>Sobre nós</h1>
        </div>
        <Card className="card_home_item">
        <Card.Img className="img_card" alt="Foto do Card" />
        <Card.Body className="card_body">
            <Card.Title className='card_title'></Card.Title>
            <Card.Text></Card.Text>
            <Button className="buton_item"></Button>
        </Card.Body>
        </Card>
        </div>
        
    )
}