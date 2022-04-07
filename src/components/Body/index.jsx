import './body.scss'
import Cards from '../Cards'
import { CardsInfo } from '../../data'

export default function Body() {
    return (

        <div id="body" className="container_card_home">
            {
                CardsInfo.map((item) => (
                    <Cards item={item}/>
                ))
            } 
        </div>
    )
} 