import {Link} from 'react-router-dom';
import {useContext, useState} from 'react';
import Swal from 'sweetalert2';

/* Importaciones propias */
import {AuthContext} from '../auth/AuthContext';

const initialStateFormRegister = {
    name: '',
    email: '',
    password: ''
}

export const RegisterPage = () => {
    const {register} = useContext(AuthContext);

    /* Estado del formulario de registro de usuario */
    const [form, setForm] = useState(initialStateFormRegister);

    const onChangeForm = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const msg = await register(form.name, form.email, form.password);

        if (msg !== true) Swal.fire('Error', msg, 'error');
    }

    /* Función para deshabilitar botón si el formulario esta incompleto */
    const formFull = () => !!(form.name.length && form.email.length && form.password.length);

    return (
        <form className="login100-form validate-form flex-sb flex-w"
              onSubmit={onSubmit}>
            <span className="login100-form-title mb-3">
                Chat - Registro
            </span>

            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="text" name="name" placeholder="Nombre"
                       value={form.name}
                       onChange={onChangeForm}/>
                <span className="focus-input100"/>
            </div>

            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="email" name="email" placeholder="Email"
                       value={form.email}
                       onChange={onChangeForm}/>
                <span className="focus-input100"/>
            </div>

            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="password" name="password" placeholder="Password"
                       value={form.password}
                       onChange={onChangeForm}/>
                <span className="focus-input100"/>
            </div>

            <div className="row mb-3">
                <div className="col text-right">
                    <Link to="/auth/login" className="txt1">
                        Ya tienes cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button type="submit" className="login100-form-btn"
                        disabled={!formFull()}>
                    Crear cuenta
                </button>
            </div>

        </form>
    )
}