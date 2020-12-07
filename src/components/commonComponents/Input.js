import React, { useState } from "react";
import "../../stylesheets/Input.scss";

const Input = ({ handleSubmit, value }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="Input">
      <form onSubmit={(e) => handleSubmit(e, query)}>
        <label htmlFor="test">{value}</label>
        <input type="text" id="test" value={query} onChange={handleChange} />
      </form>
    </div>
  );
};

export default Input;
