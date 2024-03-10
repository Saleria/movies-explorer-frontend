import React from "react";
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
                <img className="form__img"
                    src={logo}
                    alt="логотип буква С в зеленом круге" />
                <h2 className="form__title">{title}</h2>
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