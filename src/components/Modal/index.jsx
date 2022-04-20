import './modal.scss'

import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Swal from 'sweetalert2'



export default function Example(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedFile, setSelectedFile] = useState(null);

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");
    useEffect(() => {
    getProdutos();
    });

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    async function getProdutos() {
    setLoading(true);
    try {
        const data = await fetch("http://localhost:3000/api/produto");

        const { produtos } = await data.json();

        props.setProdutos(produtos);
    } catch (error) {
        alert("Houve um erro ao comunicar com o servidor");
    }
    setLoading(false);
    }

    async function newProduto(event) {
    event.preventDefault();

    if (!title || !description || !price) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preencha todos os campos',
        })
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
        Toast.fire({
            icon: 'success',
            title: 'Produto cadastrado com sucesso'
        })
        clearStates();
        getProdutos();
        handleClose();
        } catch (error) {
        alert("Erro ao cadastrar Produto");
        }
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
            <div classname="modal_button_adm">
            <Button variant="light" onClick={handleShow}>
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

                <Button variant="warning" onClick={clearStates}>Limpar</Button>

                <Button variant="success" onClick={newProduto}>
                {!id ? "Cadastrar" : "Alterar"}
                </Button>
            </Modal.Footer>
            </Modal>
            </div> 
        </>
    );
}

