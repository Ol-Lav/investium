import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Profile.scss";

export const Profile = () => {
  return (
    <div className="profile">
      <FontAwesomeIcon icon={faUser} className="profile__icon" />
      <h2 className="profile__title">Finish your profile</h2>
      <p className="profile__text">In faucibus cursus nulla nisi etiam urna.</p>
      <div className="profile__line">
        <img
          src="./images/line.png"
          alt="2/6 completed"
          className="profile__line-pic"
        />
        2/6
      </div>
      <button className="profile__btn">Update profile</button>
    </div>
  );
};
