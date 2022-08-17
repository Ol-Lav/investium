import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faDollarSign,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import "./Recommended.scss";

export const Recommended = () => {
  const data = [
    {
      id: 1,
      img: "images/house.png",
      members: 2,
      name: "Condo in Griffintown",
      type: "Resid..",
      price: "500k - 1.2m",
      location: "Laval, QC",
    },
    {
      id: 2,
      img: "images/house.png",
      members: 2,
      name: "Condo in Griffintown",
      type: "Resid..",
      price: "500k - 1.2m",
      location: "Laval, QC",
    },
    {
      id: 3,
      img: "images/house.png",
      members: 2,
      name: "Condo in Griffintown",
      type: "Resid..",
      price: "500k - 1.2m",
      location: "Laval, QC",
    },
  ];

  return (
    <div className="recommended">
      <h1 className="recommended__title"> Recommended rooms</h1>
      <p className="recommended__text">
        Vivamus cursus elementum cras dui diam.
      </p>
      <ul className="recommended__list">
        {data.map((el) => {
          return (
            <li className="recommended__item" key={el.id}>
              <img src={el.img} alt={el.name} className="recommended__img" />
              <p className="recommended__data">{el.members} members</p>
              <h3 className="recommended__name">{el.name}</h3>
              <div className="recommended__data">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="recommended__icon"
                />
                {el.type}
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="recommended__icon"
                />
                {el.price}
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="recommended__icon"
                />
                {el.location}
              </div>
              <button className="recommended__btn">Preview room</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
