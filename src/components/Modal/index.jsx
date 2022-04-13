import './modal.scss'

import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


export default function Example() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        
    <>
        <Button variant="dark" onClick={handleShow}>
            Adicionar Produto
        </Button>

        <Modal show={show} onHide={handleClose}>
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
                />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Preço do produto</Form.Label>
                <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <InputGroup.Text>0.00</InputGroup.Text>
                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
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
                <Form.Control as="textarea" rows={3} />
            </FloatingLabel>
            </Form.Group>
            </Form>

        </Modal.Body>

        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
            Cancelar
            </Button>
            <Button variant="success" onClick={handleClose}>
            Cadastrar
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}

