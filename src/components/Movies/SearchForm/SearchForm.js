import React from "react";

function SearchForm () {
    return(
        <div className="search">
            <form className="search__form">
                <fieldset className="search__container">
                    <input className="search__input"
                        placeholder="Фильм"
                        type="text"
                        required={true} />
                    <button className="search__button">Поиск</button>
                </fieldset>
                <span className="search__error"></span>
            </form>
        </div>
    );
}

export default SearchForm; 