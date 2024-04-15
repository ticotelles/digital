// import petshops from './services/petshop';
import { useState } from "react";
import axios from 'axios';
import Resultado from "./components/Resultado";
import "./App.css";



export function App() {
  const [smallDogs, setSmallDogs] = useState("");
  const [bigDogs, setBigDogs] = useState("");
  const [date, setDate] = useState("");
  const [ results, setResults] = useState([]);
 
  const handleSmallDog = (e) => setSmallDogs(e.target.value);
  const handleBigDog = (e) => setBigDogs(e.target.value);
  const handleDate = (e) => setDate(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/petshop', {  smallDogs,bigDogs, date })
    .then(function (response) {
      console.log(response);
      setResults(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <h2>PetShop mais próximos da sua casa</h2>
        </div>

        <div className="input-form">
          <label htmlFor="date" >Data: </label>
          <input type="date" className="inputs" id="date" onChange={handleDate}/>

          <label htmlFor="smallDogs">Cães Pequenos: </label>
          <input type="text" id="smallDogs" className="inputs" placeholder="Cães Pequenos" onChange={handleSmallDog}/>

          <label htmlFor='bigDogs' >Cães Grandes: </label>
          <input type="text" id="bigDogs" className="inputs" placeholder="Cães Grandes" onChange={handleBigDog}/>
        </div>
        <div className="divBtn">
          <button className="btn" onClick={handleSubmit}>Pesquisar</button>
        </div>
      </form>
      <div className="result">
        { results?.map(item =><div key={item.company}> {item.data} PetShop: { item.company } - Total: R${item.total} - Distancia: {item.distance} m</div>)}

      </div>
    </div>
    
  );
}

export default App;
