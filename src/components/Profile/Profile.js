import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({isExit, onUpdateUser}) {
    const navigate = useNavigate();
    
    const [name, setName] = React.useState('Виталий');
    const [email, setEmail] = React.useState('pochta@yandex.ru');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    return (
        <main>
            <section className="profile">
                <h1 className="profile__title">
                    Привет, {name}!
                </h1>
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
                                maxLength="30"
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
                    <button className="profile__form-button"
                        type="submit"
                        onSubmit={onUpdateUser}>
                        Редактировать
                    </button>
                    <button className="profile__form-button-exit"
                        onClick={isExit}>
                        Выйти из аккаунта
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Profile; 