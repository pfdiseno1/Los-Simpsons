import { useState, useEffect } from "react"
import Character from "./componentes/Character";
import NavBar from "./componentes/NavBar";
import Menu from "./componentes/Menu";



function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([])

  const initialUrl = 'https://apisimpsons.fly.dev/api/personajes?limit=20&page=${numPage}'

  function fetchCharacters(url) { 
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
      setCharacters(datos.docs);
      setInfo({
        hasPrevPage:datos.hasPrevPage,
        hasNextPage:datos.nextPage,
      });
    })
    .catch(error => console.log(error));
  }
  useEffect(() => {
    fetchCharacters(initialUrl);

  }, []);
  console.log(characters)
  const next = ()=> {
    fetchCharacters(`${initialUrl}?page = ${info.nextPage}`);
  };

  const prev = ()=> {
    fetchCharacters(`${initialUrl} ? page = ${ info.prevPage}`);
  };
  const handleState = (event) => {
    console.log(event.target.value)
} 
  return <>
  <Menu />
    <select name="estado" id="estado" onChange={handleState}>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>

        </select>
        <div>{characters.map((personaje, index) =>(
   <Character key={index} personaje={personaje}/>
  ))}</div></>
  }
export default App
