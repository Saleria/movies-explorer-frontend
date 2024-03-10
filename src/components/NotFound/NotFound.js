import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    function returnPage() {
        navigate(-1, { replace: true });
    }

    return (
        <section className="not-found">
            <h2 className="not-found__title">
                404
            </h2>
            <p className="not-found__subtitle">
                Страница не найдена
            </p>
            <button className="not-found__link"
                onClick={returnPage}>
                Назад
            </button>
        </section>
    );
}

export default NotFound;