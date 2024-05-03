import React, { useState } from "react";
import "./Panel.css";

const Panel = () => {
  const circleArr = [
    {
      id: 1,
      isRed: true,
    },
    {
      id: 2,
      isRed: true,
    },
    {
      id: 3,
      isRed: true,
    },
    {
      id: 4,
      isRed: true,
    },
    {
      id: 5,
      isRed: true,
    },
  ];

  const [isClicked, setIsClicked] = useState(circleArr);

  //   console.log(circleArr);

  const handleCircleClick = (id) => {
    // console.log(circleArr);

    setIsClicked((prev) => {
      circleArr.filter((element, index) => {
        if (id === element.id) return element;
      });
      //   circleArr.map((el) => {
      //     // console.log(el);
      //     {...el, isRed:}
      //     // ...el,
      //     // el.isRed= !prev
      //   });
    });
  };
  return (
    <div className="panel">
      {circleArr.map((i) => (
        <div
          className={`circle ${isClicked ? "green" : "red"}`}
          onClick={() => {
            handleCircleClick(i);
          }}
          key={i}
        ></div>
      ))}
    </div>
  );
};

export default Panel;
