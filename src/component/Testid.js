import React, { useState } from "react";

export default function Testid(props) {
  const [id, Setid] = useState(props.match.params.id);
  console.log(id);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
