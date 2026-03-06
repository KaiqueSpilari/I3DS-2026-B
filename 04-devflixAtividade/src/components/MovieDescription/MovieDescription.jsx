import { useEffect, useState } from "react";
import styles from "./MovieDescription.module.css";

const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState({});
  const [sinopsePT, setSinopsePT] = useState("");
  const [genrePT, setGenrePT] = useState("");
  const [actorsPT, setActorsPT] = useState("");
  const [typePT, setTypePT] = useState("");

  const traduzir = async (texto) => {
    try {
      const response = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          q: texto,
          source: "en",
          target: "pt",
          format: "text"
        })
      });

      const data = await response.json();
      return data.translatedText;

    } catch (error) {
      console.error("Erro ao traduzir:", error);
      return texto;
    }
  };

  useEffect(() => {
    const buscarFilme = async () => {
      try {
        const response = await fetch(`${props.apiUrl}&i=${props.movieID}`);
        const data = await response.json();

        setMovieDesc(data);

        if (data.Plot) {
          const traduzida = await traduzir(data.Plot);
          setSinopsePT(traduzida);
        }

        if (data.Genre) {
          const traduzido = await traduzir(data.Genre);
          setGenrePT(traduzido);
        }

        if (data.Actors) {
          const traduzido = await traduzir(data.Actors);
          setActorsPT(traduzido);
        }

        if (data.Type) {
          const traduzido = await traduzir(data.Type);
          setTypePT(traduzido);
        }

      } catch (error) {
        console.error(error);
      }
    };

    buscarFilme();
  }, []);

  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        
        <div className={styles.movieInfo}>
          <img src={movieDesc.Poster} alt="" />

          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>

          <div className={styles.movieType}>
            <div>
              <img src="/favicon.png" alt="" />
              {typePT || movieDesc.Type}

              <h1>{movieDesc.Title}</h1>

              <a
                href={`https://google.com/search?q=${encodeURIComponent(movieDesc.Title)}`}
                target="_blank"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>

        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {movieDesc.imdbRating} | Duração: {movieDesc.Runtime} | {movieDesc.Released}
          </div>

          <div className={styles.containerFlex}>
            <p>Elenco: {actorsPT || movieDesc.Actors}</p>
            <p>Gênero: {genrePT || movieDesc.Genre}</p>
          </div>
        </div>

        <div className={styles.desc}>
          <p>Sinopse: {sinopsePT || "Traduzindo sinopse..."}</p>
        </div>

      </div>
    </div>
  );
};

export default MovieDescription;