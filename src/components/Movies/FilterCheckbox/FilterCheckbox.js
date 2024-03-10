import React from "react";

function FilterCheckbox() {
    return (
        <div className="filter">
            <input className="filter__check"
                type="checkbox"
                id="filter"
            />
            <label className="filter__title"
                htmlFor="filter">
                Короткометражки
            </label>
        </div>
    );
}

export default FilterCheckbox;