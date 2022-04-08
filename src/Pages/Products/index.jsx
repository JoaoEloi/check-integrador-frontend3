import './products.scss'
import Cards from '../../components/Cards'
import { CardsInfo } from '../../data'

export default function Products() {
    return (
        <div id="products" className='products_container'>
            <div className='title'>
                <h1>Produtos</h1>
            </div>

            <div id="body" className="container_card_home">
                {
                    CardsInfo.map((item) => (
                        <Cards item={item} />
                    ))
                }
            </div>
        </div>
    )
}