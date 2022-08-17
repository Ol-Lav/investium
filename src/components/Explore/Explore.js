import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Explore.scss";

export const Explore = () => {
  return (
    <div className="explore">
      <h2 className="explore__title">
        Explore the hundres of existing chatrooms
      </h2>
      <p className="explore__text">Vivamus cursus elementum cras dui diam.</p>
      <div className="explore__input">
        <input type="text" placeholder="Search" />

        <input list="investment" placeholder="Type of investment" />
        <datalist id="investment">
          <option value="1" />
          <option value="2" />
          <option value="3" />
        </datalist>

        <input list="budget" placeholder="Budget" />
        <datalist id="budget">
          <option value="1" />
          <option value="2" />
          <option value="3" />
        </datalist>

        <input list="location" placeholder="Location" />
        <datalist id="location">
          <option value="1" />
          <option value="2" />
          <option value="3" />
        </datalist>

        <button className="explore__btn">Search</button>
      </div>

      <div className="explore__criteria">
        <p className="explore__criteria-main">Your criteria</p>
        <p className="explore__criteria-option">
          Montreal, QC{" "}
          <FontAwesomeIcon icon={faXmark} className="explore__icon" />
        </p>
        <p className="explore__criteria-option">
          Min. $10k — $1M{" "}
          <FontAwesomeIcon icon={faXmark} className="explore__icon" />
        </p>
      </div>
    </div>
  );
};
