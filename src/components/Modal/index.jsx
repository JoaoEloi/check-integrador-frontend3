import './modal.scss'

import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FloatingLabel from 'react-bootstrap/FloatingLabel'



export default function Example() {

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
        const data = await fetch("http://localhost:3000/api/produtos");

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
            <Button variant="dark" onClick={handleShow}>
                Adicionar Produto
            </Button>

            <Modal onSubmit={id ? editProduto : newProduto} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Adicionando um novo produto</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <FloatingLabel 
                    controlId="floatingInput"
                    label="Nome do produto"
                    className="mb-3"
                    >
                    <Form.Control
                        type="name"
                        placeholder="Nome Do Produto"
                        autoFocus
                        value={title}
                        onChange={(event) => setTitle(event.target.value)} 
                        
                    />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Preço do produto</Form.Label>
                    <InputGroup className="mb-3">
                    <InputGroup.Text>R$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                    <Form.Control aria-label="Dollar amount (with dot and two decimal places)"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)} />
                    </InputGroup>
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Descrição do produto</Form.Label>
                <FloatingLabel 
                    controlId="floatingInput"
                    label="Insira aqui uma breve
                    descrição do seu produto"
                    className="mb-3"
                >
                    <Form.Control as="textarea" rows={3} 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    />
                </FloatingLabel>
                </Form.Group>
                </Form>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                Cancelar
                </Button>
                <Button variant="success" onClick={handleClose}>
                {!id ? "Cadastrar" : "Alterar"}
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}

