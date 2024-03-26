import React from "react";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";

function Register({onSubmit, handleChange, name, email, password}) {
    const navigate = useNavigate();
    function toLogin() {
        navigate("/signin", { replace: true });
    }
    return (
        <main>
            <Form
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                lableText="Уже зарегистрированы?"
                buttonEnterText="Войти"
                onClick={toLogin}
                onSubmit={onSubmit}>
                <div className="form__block">
                    <label className="form__input-lable" htmlFor="input-name">
                        Имя
                    </label>
                    <input className="form__input"
                        id="name"
                        name="name"
                        placeholder="Введите Ваше имя"
                        onChange={handleChange}
                        value={name ?? ''}
                        minLength="2"
                        maxLength="30"
                        type="text"
                        required />
                    <span className="form__input-error" id="input-name-error" />
                    <label className="form__input-lable" htmlFor="input-email">
                        E-mail
                    </label>
                    <input className="form__input"
                        id="email"
                        name="email"
                        placeholder="Введите Ваш email"
                        onChange={handleChange}
                        value={email ?? ''}
                        minLength="2"
                        maxLength="50"
                        type="email"
                        required />
                    <span className="form__input-error" id="input-email-error" />
                    <label className="form__input-lable" htmlFor="input-password">
                        Пароль
                    </label>
                    <input className="form__input"
                        id="password"
                        name="password"
                        placeholder="Введите пароль"
                        onChange={handleChange}
                        value={password ?? ''}
                        minLength="8"
                        type="password"
                        required />
                    <span className="form__input-error" id="input-password-error" />
                </div>
            </Form>
        </main>
    );
}

export default Register;