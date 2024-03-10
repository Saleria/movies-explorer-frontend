import React from "react";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    function toEnter() {
        navigate("/signin", { replace: true });
    }

    return (
        <Form
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            lableText="Уже зарегистрированы?"
            buttonEnterText="Войти"
            onClick={toEnter}>
            <div className="form__block">
                <label className="form__input-lable" htmlFor="input-name">
                    Имя
                </label>
                <input className="form__input"
                    id="input-name"
                    name="input-name"
                    placeholder="Введите Ваше имя"
                    minLength="2"
                    maxLength="30"
                    type="text"
                    required />
                <span className="form__input-error" id="input-name-error" />
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

export default Register;