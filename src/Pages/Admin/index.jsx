import './admin.scss'
import Modal from '../../components/Modal'
import { useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Card } from 'react-bootstrap';
import Swal from 'sweetalert2'
import ImgTeste from '../../assets/thumbnail_destaque_smash-burger-le-pingue.png'


export default function Administracao() {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const [produtos, setProdutos] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [price, setPrice] = useState("");
    // const [id, setId] = useState("");
    // useEffect(() => {
    // getProdutos();
    // }, []);

    // const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top-end',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //     toast.addEventListener('mouseenter', Swal.stopTimer)
    //     toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    // })
    

    // async function getProdutos() {
    // setLoading(true);
    // try {
    //     const data = await fetch("http://localhost:3000/api/produto");

    //     const { produtos } = await data.json();

    //     setProdutos(produtos);
    // } catch (error) {
    //     alert("Houve um erro ao comunicar com o servidor");
    // }
    // setLoading(false);
    // }

    // async function newProduto(event) {
    // event.preventDefault();

    // if (!title || !description || !price) {
    //     alert("Preencha todos os campos");
    // } else {
    //     const body = {
    //     title,
    //     price,
    //     description,
    //     };

    //     try {
    //     await fetch("http://localhost:3000/api/produto", {
    //         method: "POST",
    //         body: JSON.stringify(body),
    //     });
    //     alert("Cadastrado com sucesso");
    //     clearStates();
    //     getProdutos();
    //     } catch (error) {
    //     alert("Erro ao cadastrar Produto");
    //     }
    // }
    // }

    // function fillStates(produto) {
    //     setTitle(produto.title);
    //     setPrice(produto.price);
    //     setDescription(produto.description);
    //     setId(produto.id);
    //     handleShow();
    //     }

    //     async function editProduto(event) {
    //         event.preventDefault();
    //         try {
    //             const body = {
    //             title,
    //             price,
    //             description,
    //             };
    //             await fetch("http://localhost:3000/api/produto/" + id, {
    //             method: "PATCH",
    //             body: JSON.stringify(body),
    //             });
    //             alert("Produto alterado");
    //             clearStates();
    //             getProdutos();
    //         } catch (error) {
    //             alert("Erro ao alterar");
    //         }
    //         }


    // async function deleteProduto(id) {
    // try {
    //     await fetch("http://localhost:3000/api/produto/" + id, {
    //     method: "DELETE",
    //     });
    //     Toast.fire({
    //         icon: 'success',
    //         title: 'Produto excluído com sucesso'
    //     })
    //     getProdutos();
    // } catch (error) {
    //     alert("Erro ao deletar produto");
    // }
    // }


    // function clearStates() {
    // setId("");
    // setTitle("");
    // setPrice("");
    // setDescription("");
    // }


    return (
        <>
            <div className="admin_container">

                        <div className="title">
                            <h1>Admin</h1>
                        </div>

                {/* <Modal 
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                className="modal_button_adm"
                    setProdutos={setProdutos}
                    editProdutos={editProduto}
                    id={id} title={title} price={price} description={description}/>

                    <section className="section-dos-cards">
                        {produtos.map((produto) => (
                            <Card className="Card-dos-produtos">
                                
                                <Card.Body className="card_body">
                                    <Card.Title className="card_title">{produto.title}</Card.Title>
                                    <Card.Text className="card_text">{produto.description}</Card.Text>
                                    <Card.Text className="card_text">{produto.price}</Card.Text>
                                    <Card.Text className="card_text">{produto.id}</Card.Text>
                                </Card.Body>
                                <FiEdit size={40} color="white" onClick={() => fillStates(produto)} />
                                <FiTrash size={40} color="white" onClick={() => deleteProduto(produto.id)}/>
                            </Card>
                        ))}
                        {loading && <h3>Carregando dados...</h3>}
                    </section> */}
            </div>
        </>
)
}

{/* <Card.Img className="img_card" alt="Foto do Card" src={ ImgTeste }/> */}


                

                