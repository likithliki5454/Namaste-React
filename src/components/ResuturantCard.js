import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
const ResturantCard = ({ url, time, item_name, provider, rating }) => {
    return (
      <div className="card">
        <img src={url} />
        <div className="card-info">
          <h5>
            {item_name} by <span className="provider">{provider}</span>
          </h5>
          <p>Arrivat time {time}</p>
          <div className="rating">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            {rating}
          </div>
        </div>
      </div>
    );
  };
  export default ResturantCard;