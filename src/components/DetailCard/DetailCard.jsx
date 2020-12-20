import React, { useContext } from "react";

import { removeFromLocalStorage } from "../../services/localstorage.service";
import StoreContext from "../../context/StoreContext";

import "./DetailCard.scss";

const DetailCard = ({ item, index }) => {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <figure className="detail-card">
      <div className="image-container">
        <img src={item.sprites.other["official-artwork"].front_default} alt="pokemon-card" className="card-image" />
      </div>
      <button type="button" className="btn-remove" onClick={() => removeFromLocalStorage(item, index, state, dispatch)}>
        -
      </button>
      <figcaption className="caption">
        <h1 className="name">{item.name}</h1>
        <table className="stats">
          <tbody>
            {item.stats.map((stat) => (
              <tr key={stat.stat.name}>
                <th>{stat.stat.name}</th>
                <td>{stat.base_stat}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="attributes">
          <div className="attribute">
            <span className="label">Abilities</span>
            <div className="names">
              {item.abilities.map((ability) => (
                <span key={ability.ability.name}>{ability.ability.name}</span>
              ))}
            </div>
          </div>
          <div className="attribute">
            <span className="label">Types</span>
            <div className="names">
              {item.types.map((type) => (
                <span key={type.type.name}>{type.type.name}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="attributes">
          <div className="attribute">
            <span className="label">Size</span>
            <div className="names">
              <span>Weight: {item.weight}</span>
              <span>Height: {item.height}</span>
            </div>
          </div>
          <div className="attribute">
            <span className="label">Experience</span>
            <div className="names">
              <span>{item.base_experience}</span>
            </div>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default DetailCard;
