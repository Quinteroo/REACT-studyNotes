// eslint-disable-next-line no-unused-vars
import React from "react"
import "./Characters.css"
import { useState, useEffect } from "react"
import Loading from "../../Loading/Loading.jsx"
import CharacterCard from "../../CharacterCard/CharacterCard.jsx"





const Characters = () => {

  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)


  useEffect(() => {
    setLoading(true)
    setCharacters([])

    fetch(`https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}&limit=20`)
      .then((res) => res.json())
      .then((res) => { setCharacters(res.data) });
    setLoading(false)
  }, [page])



  return (
    < section className="image-character-container" >
      {loading && <Loading />}
      {
        characters.map((character) => (
          <CharacterCard key={character._id} character={character} />

        ))
      }

      <div className="pagination">
        <button onClick={() => setPage(page - 1)}>{"<"}</button>
        <p>{page}</p>
        <button onClick={() => setPage(page + 1)}>{">"}</button>
      </div>

    </section >
  );
}





export default Characters