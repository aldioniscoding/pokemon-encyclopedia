import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getSingle } from "../../services/generic.service";
import Loader from "../../components/Loader/Loader";
import DetailCard from "../../components/DetailCard/DetailCard";

import "./PokemonCard.scss";

const PokemonCard = ({ match: { params } }) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingle(params.name).then((result) => {
      setPokemon(result);
      setLoading(false);
    });
  }, []);

  return (
    <div className="pokemoncard-container">
      <Link to="/">
        <i className="fas fa-chevron-left back-icon" />
      </Link>
      {loading ? <Loader /> : <DetailCard item={pokemon} />}
    </div>
  );
};

export default PokemonCard;
