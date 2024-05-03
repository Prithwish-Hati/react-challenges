import { Star } from "lucide-react";
import SingleStar from "./SingleStar";

const StarRating = ({ totalStars }) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold">Star Rating</h2>

      <div className="mt-6 flex gap-1">
        <SingleStar />
        <SingleStar />
        <SingleStar />
        <SingleStar />
        <SingleStar />
      </div>
    </section>
  );
};

export default StarRating;
