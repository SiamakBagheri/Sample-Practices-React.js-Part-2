import { Link } from "react-router-dom";
import "./style.css";

const Card = ({ data, variant }) => {

  return (
    <div className={variant}>
      <Link to={data.target} className="card">
        <div
          className="thumb"
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
        <article>
          <h1>{data.title}</h1>
          <span>{data.summary}</span>
        </article>
      </Link>
    </div>
  );
};

export default Card;
