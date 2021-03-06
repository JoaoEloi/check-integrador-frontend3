import './home.scss'
import card_image from '../../assets/thumbnail_destaque_smash-burger-le-pingue.png'
import card_image2 from '../../assets/thumbnail_destaque_combo-kids.png'
import card_image3 from '../../assets/thumbnail_destaque_festival-mini-hamburguer.png'
import Cards from '../../components/Cards'
import { CardsInfo } from '../../data'
import api from '../../Service/api'
import axios from 'axios'


import Carousel from 'react-bootstrap/Carousel'
import { useEffect, useState } from 'react'

export default function Home() {

    const [usuarios, setUsuarios] = useState([]);
    const [pratos, setPratos] = useState([]);
    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {getData()}, []);

    async function getData(){
        await axios.get("http://54.152.13.86:8080/restaurantes").then((response) =>{
            setRestaurantes(response.data);
        })

        await axios.get("http://54.152.13.86:8080/pratos").then((response) =>{
            setPratos(response.data);
        })
    }

    return (
        <home id="home" className="home_container">
            <div className="title">
                <h1>Home</h1>
            </div>
            <section className="carousel_container">
                
                <Carousel >
                    <Carousel.Item interval={2000} >
                        <div className="carousel_item">
                            <img
                                className="carousel_img"
                                src={card_image}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className="carousel_text" >Smash Burger</h3>
                                <p className="carousel_text" >Carne prensada na chapa bem quente até criar uma crostinha que faz toda a diferença.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item interval={2000} >
                        <div className="carousel_item">
                            <img
                                className="carousel_img"
                                src={card_image2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3 className="carousel_text" >O Combo Kids chegou!</h3>
                                <p className="carousel_text" >O que vem no #Combo? Cheeseburger, Suco, Batata Frita e o Copo Personalizado. Venha conferir!</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item interval={2000} >
                        <div className="carousel_item">
                            <img
                                className="carousel_img"
                                src={card_image3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3 className="carousel_text" >O Festival Mini-Hambúrguer chegou!</h3>
                                <p className="carousel_text" >São seis opções deliciosas: Catupiry com Bacon, Tuba, Quatro Queijos, Cheddar, Costela e Cheeseburger.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </section>

            <div id="body" className="container_card_home">
                {
                    pratos.map((pratos) => (
                        <Cards item={pratos} />
                    ))
                }
            </div>
        </home>
    )
}