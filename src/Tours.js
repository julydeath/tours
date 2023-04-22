import React from "react";
import Tour from "./Tour";
const Tours = ({ list, handleDelete }) => {
  return <Tour list={list} handleDelete={handleDelete} />;
};

export default Tours;
