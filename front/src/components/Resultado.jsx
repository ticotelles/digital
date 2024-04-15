import React from "react";
import  { App }  from '../App';



// function data ({
//     company,
//     weekSmallDogs,
//     weekBigDogs,
//     weekendSmallDogs,
//     weekendBigDogs,
//     distance,
//     smallDogsCost,
//     bigDogsCost,
//     total,
//   })


const  Resultado = (results) => {
  return (
      <div>
       { results?.map(item =><div key={item.company}> {item.data} { item.company } {item.total} {item.distance}</div>)}
       
      </div>
  
  );
}
// Resultado.propTypes = {
//   results: PropTypes.arrayOf(
//     PropTypes.shape({
//       company: PropTypes.string.isRequired,
//       total: PropTypes.number.isRequired,
//       distance: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

export default Resultado;
// results.map(result =><div key={result.company}> { result.company } {result.total} {result.distance}

