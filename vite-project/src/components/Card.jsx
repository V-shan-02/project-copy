export default function Card({ location, rating, name, image, price }) {
  return (
    <div className={rating ? "card card-rating" : "card"}>
      <img src={image} alt="" width={150} />
      <h3 style={{ color: "black" }}>{location}</h3>

      <h4 style={{ color: "gray" }}>{name}</h4>
      {rating < 4 ? (
        <h5 style={{ color: "red" }}>{rating} ★</h5>
      ) : (
        <h5 style={{ color: "green" }}>{rating} ★</h5>
      )}
      <h5 style={{ color: "black" }}>{price}/night</h5>
    </div>
  );
}
// we can write this way for checking if its on sale or not too
//<h2>{props.sale === true ? "Sale" : ""}</h2>
