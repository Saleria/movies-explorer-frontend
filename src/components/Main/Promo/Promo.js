import React from "react";
import landingLogo from '../../../images/landing-logo.svg';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__info">
                <h1 className="promo__title">
                    Учебный проект студента факультета <br />Веб-разработки.
                </h1>
                <p className="promo__subtitle">
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                </p>
                <button type="button"
                    className="promo__button">
                    <a className="promo__link"
                    href="#project">
                        Узнать больше
                    </a>
                </button>
            </div>
            <img className="promo__logo"
                src={landingLogo}
                alt="Планета web"
            />
        </section>
    );
}

export default Promo;