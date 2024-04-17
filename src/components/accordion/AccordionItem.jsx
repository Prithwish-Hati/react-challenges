import { SquareChevronDown } from "lucide-react";
import { useState } from "react";

const AccordionItem = ({
  id,
  name,
  text,
  active,
  setActive,
  isMultiAccordions,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <div className="border-2 rounded-xl border-gray-400 my-3">
        <div
          className="w-full flex justify-between items-center bg-red-100 rounded-t-xl px-4 py-2"
          onClick={() => {
            active === id ? setActive(null) : setActive(id);
            // if (isMultiAccordions) {
            setIsOpened((prev) => !prev);
            // }
          }}
        >
          <h4 className="text-xl">{name}</h4>
          <SquareChevronDown />
        </div>
        {active === id && !isMultiAccordions && <p className="m-4">{text}</p>}
        {isMultiAccordions && isOpened && <p className="m-4">{text}</p>}
      </div>
    </>
  );
};

export default AccordionItem;
