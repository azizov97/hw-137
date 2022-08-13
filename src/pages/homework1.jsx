import { useState } from "react";
import "../style/homework1.scss";

const Homework1 = () => {
  const [value, onChange] = useState(1);

  return (
    <>
      <div>
        <h1>Homework1 Page</h1>
        <p>https://q3w4iy.csb.app/</p>
      </div>

      <div className="slider-container">
        <input
          className="slider"
          type="range"
          min="1"
          max="100"
          value={value}
          onChange={({ target: { value } }) => {
            onChange(value);
          }}
        />
      </div>
      <button
        className="btn btn-outline-info mt-4"
        onClick={() => alert(`value = ${value}`)}
      >
        Show Data
      </button>
    </>
  );
};

export default Homework1;
