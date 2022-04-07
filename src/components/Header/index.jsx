import './header.scss'
import Button from 'react-bootstrap/Button'


export default function Header() {

    function scrollToComponent(id) {
        document.getElementById(id).scrollIntoView()
        
    }


    return(

        <header id="header" className="header_container_home">
    
            <ul className="container_buttons">

                <li> <Button color="dark" onClick={() => scrollToComponent("banner")} className="header_buttons_item">Home</Button> </li>

                <li> <Button color="dark"  onClick={() => scrollToComponent("body")} className="header_buttons_item">Produtos</Button> </li>

                <li> <Button color="dark" onClick={() => scrollToComponent("footer")} className="header_buttons_item">Carrinho</Button> </li>

                <li> <Button color="dark" onClick={() => scrollToComponent("footer")} className="header_buttons_item">Administração</Button> </li>

                <li> <Button color="dark" onClick={() => scrollToComponent("footer")} className="header_buttons_item">Sobre nós</Button> </li>

            </ul>  

        </header>

    )

} 