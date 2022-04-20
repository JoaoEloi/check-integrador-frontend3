import './admin.scss'
import Modal from '../../components/Modal'
import { useEffect, useState } from "react";
import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";
import { Card } from 'react-bootstrap';
import Login from '../../components/Login';

export default function Administracao() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");
    useEffect(() => {
    getProdutos();
    }, []);

    async function getProdutos() {
    setLoading(true);
    try {
        const data = await fetch("http://localhost:3000/api/produto");

        const { produtos } = await data.json();

        setProdutos(produtos);
    } catch (error) {
        alert("Houve um erro ao comunicar com o servidor");
    }
    setLoading(false);
    }

    async function newProduto(event) {
    event.preventDefault();

    if (!title || !description || !price) {
        alert("Preencha todos os campos");
    } else {
        const body = {
        title,
        price,
        description,
        };

        try {
        await fetch("http://localhost:3000/api/produto", {
            method: "POST",
            body: JSON.stringify(body),
        });
        alert("Cadastrado com sucesso");
        clearStates();
        getProdutos();
        } catch (error) {
        alert("Erro ao cadastrar Produto");
        }
    }
    }

    async function deleteProduto(id) {
    try {
        await fetch("http://localhost:3000/api/produto/" + id, {
        method: "DELETE",
        });
        alert("Produto Deletado com sucesso");
        getProdutos();
    } catch (error) {
        alert("Erro ao deletar produto");
    }
    }

    function fillStates(produto) {
    setTitle(produto.title);
    setPrice(produto.price);
    setDescription(produto.description);
    setId(produto.id);
    }

    function clearStates() {
    setId("");
    setTitle("");
    setPrice("");
    setDescription("");
    }

    async function editProduto(event) {
    event.preventDefault();
    try {
        const body = {
        title,
        price,
        description,
        };
        await fetch("http://localhost:3000/api/produto/" + id, {
        method: "PATCH",
        body: JSON.stringify(body),
        });
        alert("Produto alterado");
        clearStates();
        getProdutos();
    } catch (error) {
        alert("Erro ao alterar");
    }
    }

    async function checkProduto(id, status) {
    const body = {
        status: !status,
    };

    try {
        await fetch("http://localhost:3000/api/produto/" + id, {
        method: "PATCH",
        body: JSON.stringify(body),
        });
        getProdutos();
    } catch (error) {}
    }

    return (
        <>
            <div className="admin_container">

                    <div className="title">
                        <h1>Admin</h1>
                    </div>

                    {/* <form className="form-do-todo" onSubmit={id ? editProduto : newProduto}>
                    <h1 className="h1-do-todo" >Cadastrar Produto</h1>
                    <div className="inputs">
                    <label className="label-do-todo">
                        <span className="span-do-todo" >Nome do produto</span>
                        <input className="input-do-todo"
                        placeholder="Nome do produto"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        />
                    </label>

                    <label className="label-do-todo">
                        <span className="span-do-todo" >Descrição</span>
                        <input className="input-do-todo"
                        placeholder="Descrição"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        />
                    </label>
                    <div className="row">
                        <label className="label-do-todo">
                        <span className="span-do-todo" >Preço</span>
                        <input className="input-do-todo"
                            type="number"
                            placeholder="Preço"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                        </label>
                    </div>
                    </div>
                    <div className="container-buttons-todo">
                    <button className="button-todo" type="submit">{!id ? "Salvar" : "Alterar"}</button>
                    <button className="button-todo" type="button" onClick={clearStates}>
                        Limpar
                    </button>
                    </div>
                </form> */}

                <Login />

                <Modal className="modal_button_adm"
                setProdutos={setProdutos}
                editProdutos={editProduto}/>

                <section className="section-dos-cards">
                    {produtos.map((produto) => (
                        <Card className="Card-dos-produtos">
                            <Card.Body className="card_body">
                                <Card.Title className="card_title">{produto.title}</Card.Title>
                                <Card.Text className="card_text">{produto.description}</Card.Text>
                                <Card.Text className="card_text">{produto.price}</Card.Text>
                                <Card.Text className="card_text">{produto.id}</Card.Text>
                            </Card.Body>
                            <FiEdit size={30} color="white" onClick={() => fillStates(produto)} />
                            <FiTrash size={30} color="white" onClick={() => deleteProduto(produto.id)}/>
                            <FiCheck size={30} color="white" onClick={() => checkProduto(produto.id, produto.status)}/>
                        </Card>
                    ))}
                    {loading && <h3>Carregando dados...</h3>}
                </section>
            </div>
        </>
    )
}