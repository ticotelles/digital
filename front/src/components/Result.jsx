
const  Result = (props) => {

  return (
      <div>
       <div key={props.result.company}> {props.result.data} PetShop: { props.result.company } - {new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(props.result.total || 0) } - Distancia:  {props.result.distance}m</div>
       
      </div>
  
  );
}
export default Result;


