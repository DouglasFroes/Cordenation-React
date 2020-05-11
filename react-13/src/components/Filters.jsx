import React from "react";

function Filters({ onQuery, typeFilter, handleButton }) {
  return (
    <div className="container" data-testid="filters">
      <section className="filters">
        <div className="filters__search">
          <input
            onChange={(e) => onQuery(e.target.value)}
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
          />

          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>

        <button
          className={
            typeFilter === "name"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={() => handleButton("name")}
        >
          Nome <i className="fas fa-sort-down" />
        </button>

        <button
          className={
            typeFilter === "country"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={() => handleButton("country")}
        >
          País <i className="fas fa-sort-down" />
        </button>

        <button
          className={
            typeFilter === "company"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={() => handleButton("company")}
        >
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button
          className={
            typeFilter === "department"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={() => handleButton("department")}
        >
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button
          className={
            typeFilter === "admissionDate"
              ? "filters__item is-selected"
              : "filters__item"
          }
          onClick={() => handleButton("admissionDate")}
        >
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    </div>
  );
}

export default Filters;
