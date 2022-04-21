import './login.scss'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'
import { BrowserRouter, Routes, Route, useLocation, Navigate, Link } from "react-router-dom";
import Admin from '../Admin'


export default function Login() {

    // const SignupSchema = Yup.object().shape({
    //     userName: Yup.string()
    //     .required('Insira seu nome de usuario'),

    //     email: Yup.string()
    //     .email('Email inválido')
    //     .required('Insira seu email'),

    //     password: Yup.string()
    //     .required('Senha inválida'),
    // });



    const location = useLocation();

    function onSubmit(values, actions) {
        // <Navigate To="/" replace state={{from: location}} />
    }

    

    function validate(values) {

        const errors = {};

        if(!values.userName | values.userName !== "Adm") {
        errors.userName = "Usuário incorreto"
        }else if(!values.email | values.email !== "OAdmEstaOn@gmail.com") {
            errors.email = "Email incorreto"
        } else if(!values.password | values.password !== "VaiComeçarABaderna") {
            errors.password = "Senha incorreta"
        }
        return errors;
    }

    return (

        <div className="container_form_login">

                <h1 className="h1-do-login">Signup</h1>

                <Formik
                onSubmit={onSubmit}
                validate={validate}
                // validationSchema={SignupSchema}

                initialValues={{
                    userName: '',
                    password: '',
                    email: '',
                }}>

                {({ errors, touched }) => (
                    <Form className="form_login_itens">
                        <div className="inputs_do_login">
                            <label className="label-do-login" for="userName">Nome de usuário</label>
                            <Field className="input-do-login" name="userName" placeholder="Insira seu nome de usuário"/>
                            {errors.userName && touched.userName ? (
                                <div className="info_erro_inputs" >{errors.userName}</div>
                            ) : null}

                            <label className="label-do-login" for="email">Email do usuário</label>
                            <Field  className="input-do-login" name="email" type="email" placeholder="Insira seu e-mail" />
                            {errors.email && touched.email ? <div className="info_erro_inputs" >{errors.email}</div> : null}

                            <label className="label-do-login" for="password">Senha</label>
                            <Field className="input-do-login" type="password" name="password" placeholder="Insira sua senha "/>
                            {errors.password && touched.password ? (
                                <div className="info_erro_inputs" >Preste mais atenção ao seu redor</div>
                            ) : null}

                            
                                <button  className="button-login" type="submit">Entrar</button>
                                
                        </div>
                    </Form>
                )}
            </Formik>
            
            <Button className="button_info" variant="outline-info" onClick={() => Swal.fire({
                            title: 'Surpresa',
                            html:
                                    'Usuário:<b>Adm</b> . <br/>' +
                                    'Email: <b>OAdmEstaOn@gmail.com</b> . <br/> ' +
                                    'Senha: <b>VaiComeçarABaderna</b> .',
                            width: 600,
                            padding: '3em',
                            color: '#716add',
                            backdrop: `
                                rgba(0,0,123,0.4)
                                url("https://www.nyan.cat/cats/technyancolor.gif")
                                left top
                                no-repeat`
                })}
                >Clique aqui para uma surpresa</Button>

        </div>
    );
}









        //     <Formik
        //     //valores iniciais do form
        //     initialValues={{ email: "" }}
        //     //função de submissao do formulario
        //     onSubmit={(values) => alert(values.email)}
        //     //validar campos
        //     validate={(values) => {
        //         const errors = {};
    
        //     if (!values.email) {
        //     errors.email = "Colé, digite um email";
        //     } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //     ) {
        //     errors.email = "Email invalido";
        //     }
    
        //     return errors;
        // }}
        // >
        // {({ handleSubmit, handleChange, errors }) => (
        //     <form onSubmit={handleSubmit}>
        //     <input name="email" placeholder="Email" onChange={handleChange} />
        //     {errors.email && <span>{errors.email}</span>}
    
        //     <button type="submit">Entrar</button>
        //     </form>
        // )}
        // </Formik>

    

    
