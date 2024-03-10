import React from "react";
import avatar from "../../../images/avatarMe.png";

function AboutMe() {
    return (
        <section className="about">
            <h2 className="project__title">
                Студент
            </h2>
            <div className="about__container">
                <div className="about__description">
                    <h3 className="about__title">
                        Валерия
                    </h3>
                    <p className="about__subtitle">
                        Фронтенд-разработчик, 35 лет
                    </p>
                    <p className="about__text">
                        Живу в г.Санкт-Петербурге.
                        С 2012 года работаю врачом-детским хирургом.
                        Но в ближайшее время планирую сменить сферу профессиональной деятельности.
                        У меня есть дочь и два кота:)
                        Очень люблю путешествовать и открывать для себя новые места,
                        читать и кодить, конечно!
                    </p>
                    <a className="about__link"
                        href="https://github.com/Saleria?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer">
                        Github
                    </a>
                </div>
                <img className="about__avatar"
                    alt="фото автора"
                    src={avatar}
                />
            </div>

        </section>
    );
}

export default AboutMe;