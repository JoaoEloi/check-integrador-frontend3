import './header.scss'
import Button from 'react-bootstrap/Button'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'


export default function Header() {

    /* function scrollToComponent(id) {
        document.getElementById(id).scrollIntoView()

    } */

    return (

        <header id="header" className="header_container_home">

            <img src={Logo} alt="Logo do site" className="logo_header_home" />

            <ul className="container_buttons">

                <li> 
                    <Link to="/">
                        <Button variant="dark" className="header_buttons_item">Home</Button>
                    </Link> 
                </li>

                <li> 
                    <Link to="/produtos">
                        <Button variant="dark" className="header_buttons_item">Produtos</Button>
                    </Link> 
                </li>

                <li> 
                    <Link to="/carrinho">
                        <Button variant="dark" className="header_buttons_item">Carrinho</Button>
                    </Link> 
                </li>

                <li> 
                    <Link to="/administ">
                        <Button variant="dark" className="header_buttons_item">Administração</Button>
                    </Link> 
                </li>

                <li> 
                    <Link to="/sobrenos">
                        <Button variant="dark" className="header_buttons_item">Sobre nós</Button>
                    </Link> 
                </li>

            </ul>

        </header>
    )
}

