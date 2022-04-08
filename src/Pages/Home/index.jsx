import './home.scss'
import card_image from '../../assets/card_image.png'
import Cards from '../../components/Cards'
import { CardsInfo } from '../../data'


import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
    return (
        <home id="home" className="home_container">


            <h1>Home</h1>


            <Carousel >
                <Carousel.Item>
                    <img
                        className="carousel_img"
                        src={card_image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel_img"
                        src={card_image}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carousel_img"
                        src={card_image}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div id="body" className="container_card_home">
                {
                    CardsInfo.map((item) => (
                        <Cards item={item} />
                    ))
                }
            </div>




        </home>
    )
}