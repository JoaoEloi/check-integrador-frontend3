import './aboutus.scss'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap';
import { Link } from '@mui/material';
import DataPerfil from '../../data/dataPerfil';
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";


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
                <Link href={card.link1} classname="button_link">
                <GoMarkGithub size={30} color="white" className="button_item">{card.button1}</GoMarkGithub>
                </Link>
                <Link href={card.link2}>
                    <ImLinkedin size={30}   color="white" className="button_item">{card.button2}</ImLinkedin>
                </Link>
            </Card.Body>
            </Card>         
            ))}
            </section>
        </div>
    )
}


