import './home.scss'
import card_image from '../../assets/card_image.png'
import Cards from '../../components/Cards'
import { CardsInfo } from '../../data'


import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
    return (
        <home id="home" className="home_container">

            <div className="title">
                <h1>Home</h1>
            </div>
        <section className="carousel_container"> 
            <Carousel >
                
                    <Carousel.Item interval={1000} >
                    <div className="carousel_item">
                        <img
                            className="carousel_img"
                            src={card_image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="carousel_text" >First slide label</h3>
                            <p className="carousel_text" >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item interval={1000} >
                        <img
                            className="carousel_img"
                            src={card_image}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="carousel_text" >Second slide label</h3>
                            <p className="carousel_text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1000} > 
                        <img
                            className="carousel_img"
                            src={card_image}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="carousel_text" >Third slide label</h3>
                            <p className="carousel_text" >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                
            </Carousel>
        </section>

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