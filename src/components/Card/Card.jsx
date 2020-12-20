import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { isOnTheList, addToLocalStorage } from "../../services/localstorage.service";
import StoreContext from "../../context/StoreContext";

import "./Card.scss";

const Card = ({ item }) => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <figure key={item.name} className="card">
      <figcaption className="card-caption">
        <Link to={`pokemon/${item.name}`} className="card-link">
          <h3 className="card-name">{item.name}</h3>
        </Link>
        {isOnTheList(item) ? (
          <button type="button" className="btn-added">
            <i className="fas fa-check"></i>
          </button>
        ) : (
          <button type="button" className="btn-add" onClick={() => addToLocalStorage(item, state, dispatch)}>
            +
          </button>
        )}
      </figcaption>
    </figure>
  );
};

export default Card;
