import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function Form({
    title,
    children,
    buttonText,
    lableText,
    buttonEnterText,
    onClick,
    onSubmit }) {
    return (
        <section className="form">
            <div className="form__container">
                <Link to="/"
                    className="form__logo">
                    <img src={logo}
                        alt="Логотип С"
                        className="form__img" />
                </Link>
                <h1 className="form__title">{title}</h1>
                <form className="form__shell">
                    <fieldset className="form__info">
                        {children}
                    </fieldset>
                    <button className="form__submit-button" type="submit"
                        onSubmit={onSubmit}>
                        {buttonText}
                    </button>
                    <div className="form__enter">
                        <label className="form__label" htmlFor="button">
                            {lableText}
                        </label>
                        <button className="form__button-enter"
                            id="button"
                            type="submit"
                            onClick={onClick}>
                            {buttonEnterText}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Form;