import './admin.scss'
import Modal from '../../components/Modal'
import { useEffect, useState } from "react";
import { FiCheck, FiEdit, FiTrash } from "react-icons/fi";

export default function Administracao() {


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
            <div className="title">
                <h1>Admin</h1>
            </div>


            <div className="app">

                <form className="form-do-todo" onSubmit={id ? editProduto : newProduto}>
                <h1 className="h1-do-todo" >Produtos List - 2.0</h1>
                <div className="inputs">
                <label className="label-do-todo">
                    <span className="span-do-todo" >Título</span>
                    <input className="input-do-todo"
                    placeholder="Titulo"
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
                        type="price"
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
            </form>
            <ul className="container-dos-todos">
                {produtos.map((produto) => (
                <li>
                    <div>
                    <h2>{produto.title}</h2>
                    <p className="p-do-todo" >{produto.description}</p>
                    <p className="p-do-todo" >{produto.price}</p>
                    <p className="p-do-todo" >{produto.id}</p>
                    </div>
                    <div className="container-buttons">
                    <FiEdit size={20} color="#444" onClick={() => fillStates(produto)} />
                    <FiTrash
                        size={20}
                        color="#444"
                        onClick={() => deleteProduto(produto.id)}
                    />
                    <FiCheck
                        size={20}
                        color="#444"
                        onClick={() => checkProduto(produto.id, produto.status)}
                    />
                    </div>
                </li>
                ))}
                {loading && <h3>Carregando dados...</h3>}
            </ul>
            </div>

            <Modal />
        </>
    )
}