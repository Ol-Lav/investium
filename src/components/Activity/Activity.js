import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./Activity.scss";

export const Activity = () => {
  const data = [
    {
      id: 1,
      img: "images/photo1.png",
      name: "John Jackson",
      activity: "has invited you to",
      chatroom: "Griffintown Condo - 4 bdrm",
      time: "12h",
    },
    {
      id: 2,
      img: "images/photo1.png",
      name: "John Jackson",
      activity: "has uploaded a file to the chatroom",
      chatroom: "Griffintown Condo - 4 bdrm",
      time: "12h",
    },
    {
      id: 3,
      img: "images/photo2.png",
      name: "Valerie Johnson",
      activity: "has invited you to the chatroom ",
      chatroom: "Griffintown Condo - 4 bdrm",
      time: "12h",
    },
    {
      id: 4,
      img: "images/photo3.png",
      name: "John Jackson",
      activity: "has accepted your invite the chatroom",
      chatroom: "Griffintown Condo - 4 bdrm",
      time: "12h",
    },
    {
      id: 5,
      img: "images/photo2.png",
      activity: "chatroom has been deleted",
      chatroom: "Griffintown Condo - 4 bdrm",
      time: "2 days ago",
    },
  ];

  return (
    <div className="activity">
      <div className="activity__main">
        <div>
          <h2 className="activity__title">Your activity</h2>
          <p className="activity__text">
            In faucibus cursus nulla nisi etiam urna.
          </p>
        </div>
        <button className="activity__button">View all activity</button>
      </div>
      <ul className="activity__list">
        {data.map((el) => {
          return (
            <li className="activity__item" key={el.id}>
              <img src={el.img} alt={el.name} className="activity__img" />

              {el.name ? (
                <>
                  <div className="activity__description">
                    <p>
                      <strong>{el.name}</strong>
                      {el.activity} <strong>{el.chatroom}</strong>
                    </p>
                    <p className="activity__time">
                      {el.time}
                      <br />
                      <FontAwesomeIcon
                        icon={faEllipsisH}
                        className="activity__icon"
                      />
                    </p>

                    <div className="activity__links">
                      <a href="/" className="activity__link">
                        View profile
                      </a>
                      <a href="/" className="activity__link">
                        Message
                      </a>
                      <a href="/" className="activity__link">
                        Mark as read
                      </a>
                      <a href="/" className="activity__link">
                        Delete
                      </a>
                    </div>

                    <div className="activity__btns">
                      <button className="activity__btn">Accept</button>
                      <button className="activity__btn">Deny</button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="activity__description">
                  <p>
                    <strong>{el.chatroom}</strong> {el.activity}
                  </p>
                  <p className="activity__time">
                    {el.time}
                    <br />
                    <FontAwesomeIcon
                      icon={faEllipsisH}
                      className="activity__icon"
                    />
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
