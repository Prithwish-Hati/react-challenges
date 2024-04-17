import { useRef, useState } from "react";

const Stack = () => {
  const [stack, setStack] = useState([]);
  const inputRef = useRef(null);
  const msgRef = useRef(null);

  const handlePush = () => {
    if (stack.length < 10) {
      setStack([...stack, inputRef.current.value]);
      msgRef.current.innerText = `${inputRef.current.value} has been pushed to the stack`;
      inputRef.current.value = "";
    } else {
      msgRef.current.innerText = "Stack is full";
    }
  };
  const handlePop = () => {
    if (stack.length > 0) {
      setStack((prev) => prev.slice(0, -1));
      msgRef.current.innerText = `${
        stack[stack.length - 1]
      } has been poped from the stack`;
    }
  };
  const handlePeek = () => {
    if (stack.length > 0) {
      msgRef.current.innerText = `${
        stack[stack.length - 1]
      } is the last element`;
    } else {
      msgRef.current.innerText = "Enter a value";
    }
  };
  const handleIsEmpty = () => {
    if (stack.length > 0) {
      msgRef.current.innerText = "Stack is not empty";
    } else {
      msgRef.current.innerText = "Stack is empty";
    }
  };
  const handleIsFull = () => {
    if (stack.length < 10 && stack.length >= 0) {
      msgRef.current.innerText = "Stack is not full";
    } else {
      msgRef.current.innerText = "Stack is full";
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold">Stack</h2>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Type something"
          ref={inputRef}
          className="mb-4 border-2 border-gray-400 rounded-lg h-10 px-3 w-full"
        />

        <div className="flex gap-4 flex-wrap">
          <button
            className="bg-my-red text-white font-medium p-2 rounded-md"
            onClick={handlePush}
          >
            Push
          </button>

          <button
            className="bg-my-red text-white font-medium p-2 rounded-md"
            onClick={handlePop}
          >
            Pop
          </button>

          <button
            className="bg-my-red text-white font-medium p-2 rounded-md"
            onClick={handlePeek}
          >
            Peek
          </button>

          <button
            className="bg-my-red text-white font-medium p-2 rounded-md"
            onClick={handleIsEmpty}
          >
            IsEmpty
          </button>

          <button
            className="bg-my-red text-white font-medium p-2 rounded-md"
            onClick={handleIsFull}
          >
            IsFull
          </button>
        </div>

        <p ref={msgRef} className="my-4 text-center"></p>

        {stack?.length > 0 && (
          <div className="mt-4 border-t-2 border-gray-300">
            {console.log(stack)}
            {stack.slice(0, 9).map((item, i) => (
              <p
                key={i}
                className="text-center bg-my-blue p-2 my-3 font-medium rounded-md"
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Stack;
