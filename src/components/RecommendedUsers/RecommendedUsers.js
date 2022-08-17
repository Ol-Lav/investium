import "./RecommendedUsers.scss";

export const RecommendedUsers = () => {
  const data = [
    {
      id: 1,
      img: "images/photo2.png",
      name: "Emelie Blanch",
      role: "Investing Veteran",
      experience: 15,
    },
    {
      id: 2,
      img: "images/photo1.png",
      name: "Steven Franklin",
      role: "Investing Veteran",
      experience: 15,
    },
    {
      id: 3,
      img: "images/photo4.png",
      name: "Mitchel Givens",
      role: "Investing Veteran",
      experience: 15,
    },
    {
      id: 4,
      img: "images/photo5.png",
      name: "Emelie Blanch",
      role: "Investing Veteran",
      experience: 15,
    },
    {
      id: 5,
      img: "images/photo5.png",
      name: "Emelie Blanch",
      role: "Investing Veteran",
      experience: 15,
    },
  ];

  return (
    <div className="recommendedUsers">
      <h2 className="recommendedUsers__title">Recommended users</h2>
      <ul className="recommendedUsers__list">
        {data.map((el) => {
          return (
            <li className="recommendedUsers__item" key={el.id}>
              <img
                src={el.img}
                alt={el.name}
                className="recommendedUsers__img"
              />
              <div className="recommendedUsers__data">
                <p className="recommendedUsers__data-main">
                  <strong>{el.name}</strong>
                </p>
                <p>
                  {el.role} with {el.experience}+ years experience
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
