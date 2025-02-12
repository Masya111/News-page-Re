export default function TopPopular({
  image,
  alternative,
  number,
  title,
  description,
}) {
  return (
    <div className="popular-card">
      <img src={image} alt={alternative} className="popular-image" />
      <div className="popular-text">
        <h2>{number}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
