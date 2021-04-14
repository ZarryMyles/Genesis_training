import React from "react";
import Catalog from "../Catalog/catalog";
import {Link} from "react-router-dom";

export default function homepage() {
  return (
    <div>
      <Link to="/catalog">Catalog</Link>
      <h1>Title</h1>
    </div>
  );
}
