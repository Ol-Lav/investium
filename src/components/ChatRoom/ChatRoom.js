import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import "./ChatRoom.scss";

export const ChatRoom = () => {
  return (
    <div className="chatRoom">
      <FontAwesomeIcon icon={faMessage} className="chatRoom__icon" />
      <h2 className="chatRoom__title">Start your own chatroom</h2>
      <p className="chatRoom__text">
        In faucibus cursus nulla nisi etiam urna.
      </p>
      <button className="chatRoom__btn">Start a room</button>
    </div>
  );
};
