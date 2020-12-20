import React from "react";

import Card from "../Card/Card";
import DetailCard from "../DetailCard/DetailCard";

const List = ({ data, type }) => {
  return data.map((item, index) =>
    type === "card" ? <Card key={item.name} item={item} /> : <DetailCard key={item.name} index={index} item={item} />
  );
};

export default List;
