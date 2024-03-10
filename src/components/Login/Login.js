import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";

function Login({ onSubmit }) {
    const navigate = useNavigate();
    function toRegister() {
        navigate("/signup", { replace: true });
    }
    return (
        <Form
            title="Рады видеть!"
            buttonText="Войти"
            lableText="Ещё не зарегистрированы?"
            buttonEnterText="Регистрация"
            onClick={toRegister}
            onSubmit={onSubmit}>
            <div className="form__block">
                <label className="form__input-lable" htmlFor="input-email">
                    E-mail
                </label>
                <input className="form__input"
                    id="input-email"
                    name="input-email"
                    placeholder="Введите Ваш email"
                    minLength="2"
                    maxLength="50"
                    type="email"
                    required />
                <span className="form__input-error" id="input-email-error" />
                <label className="form__input-lable" htmlFor="input-password">
                    Пароль
                </label>
                <input className="form__input"
                    id="input-password"
                    name="input-password"
                    placeholder="Введите пароль"
                    minLength="8"
                    type="password"
                    required />
                <span className="form__input-error" id="input-password-error" />
            </div>
        </Form>
    );
}

export default Login; 