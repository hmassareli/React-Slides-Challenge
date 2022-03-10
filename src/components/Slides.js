import React, { useState } from "react";

function Slides({ slides }) {
  const length = slides.length;
  const [slidePosition, setSlidePosition] = useState(0);
  const restart = () => {
    setSlidePosition(0);
  };
  const next = () => {
    if (slidePosition === length - 1) return;
    setSlidePosition(slidePosition + 1);
  };
  const prev = () => {
    if (slidePosition === 0) return;
    setSlidePosition(slidePosition - 1);
  };
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={restart}
          disabled={slidePosition === 0}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={prev}
          disabled={slidePosition === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={next}
          disabled={slidePosition === length - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slidePosition]?.title}</h1>
        <p data-testid="text">{slides[slidePosition]?.text}</p>
      </div>
    </div>
  );
}

export default Slides;
