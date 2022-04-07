import './cards.scss'
import Button from 'react-bootstrap/Button'
import { GoRepo } from "react-icons/go";

export default function Cards({ item }) {
    return (
        <div className="container_cards">

                <div className="card_home_item">

                    {/* <img src={CardIMG} className="img_card" alt="Foto do Card" /> */}

                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    
                        <Button  color="dark" className="footer_buton_item">{item.button} <GoRepo size="20px" /> </Button>
                    
                </div>
        </div>
    )
}