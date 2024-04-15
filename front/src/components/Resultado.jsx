import React from "react";
import  { App }  from '../App';




const  Resultado = (results) => {
  return (
      <div>
       { results?.map(item =><div key={item.company}> {item.data} { item.company } {item.total} {item.distance}</div>)}
       
      </div>
  
  );
}
export default Resultado;


