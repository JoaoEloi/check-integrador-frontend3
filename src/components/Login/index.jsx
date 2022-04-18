import './login.scss'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

export default function Login() {

    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
        .min(2, 'Muito curto!')
        .max(50, 'Muito longo!')
        .required('Obrigatório'),

        email: Yup.string()
        .email('Email inválido')
        .required('Obrigatório'),

        password: Yup.number()
        .required('Invalid password')
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
                            <div>{errors.userName}</div>
                        ) : null}

                        <label className="label-do-login" for="email">Email do usuário</label>
                        <Field  className="input-do-login" name="email" type="email" placeholder="Insira seu e-mail" />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}

                        <label className="label-do-login" for="password">Senha</label>
                        <Field className="input-do-login" type="password" name="password" placeholder="Insira sua senha "/>
                        {errors.password && touched.password ? (
                            <div>Sua senha deve conter apenas números</div>
                        ) : null}

                        <button  className="button-login" type="submit">Submit</button>

                    </div>
                </Form>
            )}
            </Formik>
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

    

    
