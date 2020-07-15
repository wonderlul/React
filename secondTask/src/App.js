import React, { useState } from "react";
import PostMovie from "./components/PostMovie";
import movies from "./movies.json";
import _ from "lodash";
import Genre from "./components/Genre";
import LanguageContext from "./LanguageContext";

//Zad 6: Wyświetl dwie listy filmów z których jedna będzie zawierała filmy z oceną > 6, a druga pozostałe.
// const topMovies = movies.filter(movie => movie.rating > 6);
// const worseMovies = movies.filter(movie => movie.rating <= 6);

// function App() {
//   return (
//     <div>
//       <h2>Top movies</h2>
//       {topMovies.map(movie => (
//         <PostMovie
//           key={movie.id}
//           title={movie.title}
//           poster={movie.poster}
//           rating={movie.rating}
//           description={movie.description}
//         />
//       ))}
//       <h2>Worse movies</h2>
//       {worseMovies.map(movie => (
//         <PostMovie
//           key={movie.id}
//           title={movie.title}
//           poster={movie.poster}
//           rating={movie.rating}
//           description={movie.description}
//         />
//       ))}
//     </div>
//   );
// }

const movieGenres = [...new Set(movies.map(movie => movie.genre))].sort();

function App() {
  const [userLang, setUserLang] = useState("pl");
  return (
    <LanguageContext.Provider value={userLang}>
      <button onClick={() => setUserLang("pl")} disabled={userLang === "pl"}>
        PL
      </button>
      <button onClick={() => setUserLang("en")} disabled={userLang === "en"}>
        ENG
      </button>
      <div>
        {movieGenres.map(genre => (
          <div>
            <Genre text={genre} />
            {movies
              .filter(movie => movie.genre === genre)
              .map(movie => (
                <PostMovie
                  key={movie.id}
                  title={movie.title}
                  poster={movie.poster}
                  rating={10}
                  description={movie.description}
                />
              ))}
          </div>
        ))}
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
