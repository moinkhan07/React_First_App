
const Movie = (props) => {
  return (
    <div className="movie">
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p> <b> Year: </b> {props.year}</p>
        <p> <b>Runtime: </b> {props.runtime}</p>
        <button>Book Now</button>
    </div>
  )
}

export default Movie