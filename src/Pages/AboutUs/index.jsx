import Cards from '../../components/Cards'
import { CardsInfo } from '../../data'

export default function AboutUs() {
    return(

        <>
        <h1>Sobre nós</h1>

        <div id="body" className="container_card_home">
            {
                CardsInfo.map((item) => (
                    <Cards item={item}/>
                ))
            } 
        </div>
        
        </>
    )
}