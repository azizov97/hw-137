import "../style/homework1.scss";
const Homework1 = () => {
  return (
    <>
      <div>
        <h1>Homework1 Page</h1>
        <p>https://q3w4iy.csb.app/</p>
      </div>

      <div className="slider-container">
        <div className="value-container">
          <span id="demo">0</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={0}
          className="slider"
          id="myRange"
        />
      </div>
    </>
  );
};

export default Homework1;
