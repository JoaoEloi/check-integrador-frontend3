import './aboutus.scss'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap';
import { Link } from '@mui/material';
import DataPerfil from '../../data/dataPerfil';


export default function AboutUs() {    
    return (                
        <div className="conteiner_aboutUs">

            <div className="title">
                <h1>Sobre nós</h1>
            </div>
            <section className="container_cards_aboutUs">
            {DataPerfil.map((card) => (

            <Card className="card_aboutUs_item">
            <Card.Img className="img_card" alt="Foto do Card" src={card.image}/>
            <Card.Body className="card_body">
                <Card.Title className='card_title'>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Link href={card.link1}>
                    <Button className="button_item">{card.button1}</Button>
                </Link>
                <Link href={card.link2}>
                    <Button className="button_item">{card.button2}</Button>
                </Link>
            </Card.Body>
            </Card>         
            ))}
            </section>
        </div>
    )
}
