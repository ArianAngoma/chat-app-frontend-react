import {useState} from 'react';
import {Link} from 'react-router-dom';

const initialStateFormLogin = {
    email: '',
    password: '',
    rememberMe: false
}

export const LoginPage = () => {
    /* Estado del formulario */
    const [form, setForm] = useState(initialStateFormLogin);

    const onChangeForm = ({target}) => {
        const {name, value} = target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const toggleCheck = () => {
        setForm({
            ...form,
            rememberMe: !form.rememberMe
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="login100-form validate-form flex-sb flex-w"
              onSubmit={onSubmit}>
            <span className="login100-form-title mb-3">
                Chat - Ingreso
            </span>

            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="email" name="email" placeholder="Email"
                       value={form.email}
                       onChange={onChangeForm}/>
                <span className="focus-input100"/>
            </div>

            <div className="wrap-input100 validate-input mb-3">
                <input className="input100" type="password" name="password" placeholder="Password"
                       checked={form.password}
                       onChange={onChangeForm}/>
                <span className="focus-input100"/>
            </div>

            <div className="row mb-3">
                <div className="col"
                     onClick={toggleCheck}>
                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="rememberMe"
                           checked={form.rememberMe}
                           readOnly/>
                    <label className="label-checkbox100">
                        Recordarme
                    </label>
                </div>

                <div className="col text-right">
                    <Link to="/auth/register" className="txt1">
                        Nueva cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn">
                    Ingresar
                </button>
            </div>

        </form>
    )
}