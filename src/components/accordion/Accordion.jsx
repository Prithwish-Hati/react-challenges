import { SquareChevronDown } from "lucide-react";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const accordions = [
  {
    id: 1,
    name: "Step 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh. Condimentum vitae sapien pellentesque habitant. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Lacus sed turpis tincidunt id aliquet risus. Tellus id interdum velit laoreet id donec ultrices.",
    // isVisible: false,
  },
  {
    id: 2,
    name: "Step 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh. Condimentum vitae sapien pellentesque habitant. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Lacus sed turpis tincidunt id aliquet risus. Tellus id interdum velit laoreet id donec ultrices.",
    // isVisible: false,
  },
  {
    id: 3,
    name: "Step 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh. Condimentum vitae sapien pellentesque habitant. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Lacus sed turpis tincidunt id aliquet risus. Tellus id interdum velit laoreet id donec ultrices.",
    // isVisible: false,
  },
];

const Accordion = () => {
  const [isMultiAccordions, setIsMultiAccordions] = useState(false);
  const [active, setActive] = useState(null);
  return (
    <section className="w-full">
      <h2 className="text-3xl font-semibold">Accordions</h2>
      <div className="mt-6">
        <label className="text-center">
          {" "}
          Is multiple open accordion allowed?
          <input
            type="checkbox"
            className="ml-4"
            onChange={(e) => setIsMultiAccordions(e.target.checked)}
          />
        </label>
        {accordions.map((accordion) => (
          <AccordionItem
            key={accordion.id}
            id={accordion.id}
            name={accordion.name}
            text={accordion.text}
            active={active}
            setActive={setActive}
            isMultiAccordions={isMultiAccordions}
          />
        ))}
      </div>
    </section>
  );
};

export default Accordion;

// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const Accordion = () => {
//   // const [isOpened, setIsopened] = useState(false)
//   const [data, setData] = useState(accordions);

//   const handleToggle = (item) => {
//     setData((prev) => {
//       let newArr = prev.filter((i) => {
//         return i.id !== item.id;
//       }); // items we are not clicking
//       item.isVisible = !item.isVisible; // changing the visibility of the item we are clicking
//       newArr.push(item);
//       return newArr;
//     });
//   };
//   return (
//     <section className="w-full">
//       <h1 className="text-2xl my-4 text-center">Accordion</h1>

//       {data.map((item) => (
//         <>
//           <div
//             className="w-[100%] flex justify-between border-2 border-black cursor-pointer text-xl font-semibold p-2"
//             onClick={() => handleToggle(item)}
//             key={item.id}
//           >
//             <h4>{item.name}</h4>
//             <ChevronDown />
//           </div>
//           {item.isVisible && <p>{item.text}</p>}
//         </>
//       ))}

//       {/* <div className='w-[100%] flex justify-between border-2 border-black cursor-pointer text-xl font-semibold p-2' onClick={handleToggle}>
//                 <h4 className='' >Step 1</h4>
//             </div>
//             {isOpened &&
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh. Condimentum vitae sapien pellentesque habitant. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Lacus sed turpis tincidunt id aliquet risus. Tellus id interdum velit laoreet id donec ultrices.</p>
//             } */}
//     </section>
//   );
// };

// export default Accordion;
