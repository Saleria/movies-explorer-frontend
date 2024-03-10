import React from "react";

function AboutProject() {
    return (
        <section className="project"
            id="project">
            <h2 className="project__title">
                О проекте
            </h2>
            <div className="project__container">
                <div className="project__description">
                    <p className="project__subtitle">Дипломный проект включал 5 этапов</p>
                    <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="project__description">
                    <p className="project__subtitle">На выполнение диплома ушло 5 недель</p>
                    <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__plan">
                <p className="plan__text plan__text_week">1 неделя</p>
                <p className="plan__text plan__text_week">4 недели</p>
                <p className="plan__text plan__text_info">Back-end</p>
                <p className="plan__text plan__text_info">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;