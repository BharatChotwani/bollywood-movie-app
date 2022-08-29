import "./styles.css";
import React, { useState } from "react";

const movieDb = {
  Comedy: [
    { name: "Good Newwz", time: "2h 12m" },
    { name: "Jolly LL.B2", time: "2H 20m" }
  ],
  Horror: [
    { name: "Bhoot", time: "2h 24m" },
    { name: "Roohi", time: "2H 14m" }
  ],
  Drama: [
    { name: "Andhadhun", time: "2h 30m" },
    { name: "Pink", time: "2h 16m" }
  ],
  Romance: [
    { name: "Love aaj-kal", time: "2h 21m" },
    { name: "Sanam teri kasam", time: "2H 34m" }
  ]
};

var allTimeFavMovie = Object.keys(movieDb);

export default function App() {
  const [selectedGenre, setGenre] = useState("Romance");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Bollywood Party</h1>
      <p>there are some of the movies I recommend!</p>
      {allTimeFavMovie.map((movie) => (
        <button
          key={movie}
          style={{
            cursor: "pointer",
            background: "#E5E7EB",
            borderRadius: "0.5rem",
            padding: "0.5rem  1rem",
            border: "1px solid black",
            margin: "1rem 0.3rem"
          }}
          onClick={() => genreClickHandler(movie)}
        >
          {movie}
        </button>
      ))}

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDb[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.time} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
