import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="mt-5 pt-4">
      <Link to="/catalog">Catalog</Link>
      <h1>Title</h1>
    </div>
  );
}
