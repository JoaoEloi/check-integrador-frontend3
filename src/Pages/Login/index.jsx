import './login.scss'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'

export default function Login() {

    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!')
        .required('Insira seu nome de usuario'),

        email: Yup.string()
        .email('Email inválido')
        .required('Insira seu email'),

        password: Yup.string()
        .required('Senha inválida')
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!'),
    });

    // function onSubmit(values) {
    //     alert(values.email);
    // }

    return (

        <div className="container_form_login">

                <h1 className="h1-do-login">Signup</h1>

                <Formik

                initialValues={{
                    userName: '',
                    password: '',
                    email: '',
                }}

                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    alert(values);
                }}
                >
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

                            
                                <button  className="button-login" type="submit">Submit</button>
                                
                        </div>
                    </Form>
                )}
            </Formik>
            
            <Button className="button_info" variant="outline-info" onClick={() => Swal.fire({
                            title: 'Surpresa',
                            html:
                                    'Usuário:<b>Adm</b>. <br/>' +
                                    'Email: <b>OAdmEstaOn@gmail.com</b>. <br/> ' +
                                    'Senha: <b>VaiComeçarABaderna</b>.',
                            width: 600,
                            padding: '3em',
                            color: '#716add',
                            backdrop: `
                                rgba(0,0,123,0.4)
                                url("/images/nyan-cat.gif")
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

    

    
