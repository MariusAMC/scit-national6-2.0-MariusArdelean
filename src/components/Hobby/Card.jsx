import "./Hobby.scss";

export default function Card({ number }) {
  return (
    <div>
      <div className="card">{number}</div>;
    </div>
  );
}
