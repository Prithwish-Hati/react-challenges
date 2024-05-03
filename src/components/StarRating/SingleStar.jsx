import { Star } from "lucide-react";

const SingleStar = ({ isSelected }) => {
  return <div>{isSelected ? <Star fill="#000" /> : <Star />}</div>;
};

export default SingleStar;
