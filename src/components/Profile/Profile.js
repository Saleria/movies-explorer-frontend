import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    function isExit() {
        navigate("/signin", { replace: true })
    }
    const [name, setName] = React.useState('Виталий');
    const [email, setEmail] = React.useState('pochta@yandex.ru');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    return (
        <section className="profile">
            <h2 className="profile__title">
                Привет, {name}!
            </h2>
            <form className="profile__form">
                <fieldset className="profile__info">
                    <div className="profile__shell">
                        <label className="profile__label" htmlFor="text-name">
                            Имя
                        </label>
                        <input className="profile__text"
                            id="text-name"
                            name="text-name"
                            placeholder="Имя" required
                            minLength="2"
                            type="text"
                            value={name ?? ''}
                            onChange={handleNameChange} />
                        <span className="profile__error-message"
                            id="text-name-error"></span>
                    </div>
                    <div className="profile__shell">
                        <label className="profile__label" htmlFor="email">
                            E-mail
                        </label>
                        <input className="profile__text"
                            id="email"
                            name="email"
                            placeholder="Email" required
                            minLength="2"
                            type="email"
                            value={email ?? ''}
                            onChange={handleEmailChange} />
                        <span className="profile__error-message"
                            id="text-name-error"></span>
                    </div>
                </fieldset>
                <button className="form__button">
                    Редактировать
                </button>
                <button className="form__button-exit"
                    onClick={isExit}>
                    Выйти из аккаунта
                </button>
            </form>
        </section>
    );
}

export default Profile; 