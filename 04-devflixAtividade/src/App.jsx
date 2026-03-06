import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";

import Rodape from "./components/Rodape/Rodape";
import MovieCard from "./components/MovieCard/MovieCard";

const App = () => {

  const { t } = useTranslation(); // TEM QUE FICAR AQUI

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Hulk");
  }, []);

  return (
    <div id="App">
      <img id="Logo" src={logo} alt="Logo" />

      <div className="search">
        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={t("search")}
        />
        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt="Botão de pesquisa"
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} apiUrl={apiUrl} />
          ))}
        </div>
      ) : (
        <h2 className="empty">{t("movieNotFound")}</h2>
      )}

      <Rodape link={"https://github.com/KaiqueSpilari"}>
        KaiqueSpilari
      </Rodape>
    </div>
  );
};

export default App;