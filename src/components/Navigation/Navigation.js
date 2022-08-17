import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBell,
  faMessage,
  faSearch,
  faXmark,
  faHouseChimneyWindow,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar__logo">
          <a href="/home" className="navbar__logo-link">
            <img
              src="/images/logo.png"
              alt="Investium logo"
              className="navbar__logo-link"
            />
            Investium
          </a>
        </div>

        <div className="navbar__links">
          <a href="/home" className="navbar__link">
            <FontAwesomeIcon
              icon={faHouseChimneyWindow}
              className="navbar__icon"
            />
            <p>Home</p>
          </a>

          <a href="/explore" className="navbar__link">
            <FontAwesomeIcon icon={faSearch} className="navbar__icon" />
            <p>Explore</p>
          </a>

          <a href="/chatrooms" className="navbar__link">
            <FontAwesomeIcon icon={faMessage} className="navbar__icon" />
            <p>Chatrooms</p>
          </a>
        </div>

        <div className="navbar__sub">
          <FontAwesomeIcon icon={faBell} className="navbar__icon" />
          <img src="images/photo3.png" alt="User" className="navbar__photo" />

          <p className="navbar__name">
            Henry <FontAwesomeIcon icon={faAngleDown} />
          </p>
        </div>
      </div>

      <div className="navbar__extra">
        <p>
          New real estate development available in the Old Port!
          <a href="/" className="navbar__sublink">
            {" "}
            Click here
          </a>
        </p>
        <FontAwesomeIcon icon={faXmark} className="navbar__icon-extra" />
      </div>
    </nav>
  );
};
