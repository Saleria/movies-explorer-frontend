import React from "react";

function Footer() {
    return (
        <section className="footer">
            <h4 className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h4>
            <div className="footer__container">
                <p className="footer__info">© 2024</p>
                <div className="footer__platform">
                <p className="footer__info">Яндекс.Практикум</p>
                <p className="footer__info">Github</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;