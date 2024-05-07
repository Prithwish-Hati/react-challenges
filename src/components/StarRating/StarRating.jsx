import { Star } from "lucide-react";
import { useState } from "react";

import "./StarRating.css";

const StarRating = () => {
  const starsArr = [1, 2, 3, 4, 5];

  const [selectedStars, setSelectedStars] = useState();

  const handleMouseEnter = (starId) => {
    if (starsArr.indexOf(starId) === 4) {
      setSelectedStars(starsArr);
    } else {
      setSelectedStars(starsArr.slice(0, starsArr.indexOf(starId + 1)));
    }
  };

  const handleMouseLeave = (starId) => {
    if (starsArr.indexOf(starId) === 0) {
      setSelectedStars([]);
    } else {
      setSelectedStars(starsArr.slice(starsArr.indexOf(starId), 0));
    }
  };
  console.log(selectedStars);

  return (
    <section>
      <h2 className="text-3xl font-semibold">Star Rating</h2>

      <div className="mt-6 flex gap-1">
        {starsArr.map((star) => (
          <div
            key={star}
            className={`${
              selectedStars?.includes(star) ? "selected" : "not-selected"
            }`}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={() => {
              handleMouseLeave(star);
            }}
          >
            ⭐
          </div>
        ))}
      </div>
    </section>
  );
};

export default StarRating;
