import { useRef, useState } from "react";

const TodoBoard = () => {
  const [input, setInput] = useState([]);
  const [progressTodos, setProgressTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const todoRef = useRef(null);

  const handleAdd = () => {
    console.log(todoRef.current.value);
    setInput([...input, todoRef.current.value]);
    todoRef.current.value = "";
  };

  const handleNext = (item, status) => {
    if (status === "toDo") {
      // setInput(input.slice(0, -1));
      setInput(input.filter((el, i) => el[i] !== item));
      setProgressTodos([...progressTodos, item]);
      console.log(progressTodos);
    } else if (status === "inProgress") {
      setProgressTodos(progressTodos.slice(0, -1));
      setDoneTodos([...doneTodos, item]);
    }
  };

  const handlePrev = (item, status) => {
    if (status === "inProgress") {
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold">TodoBoard</h2>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Add to do"
          className="border-2 border-black p-2"
          ref={todoRef}
        />
        <button className="p-2 bg-my-red ml-3" onClick={handleAdd}>
          Add
        </button>
      </div>

      <div className="mt-4 flex gap-4">
        <div className="border-2 border-black  p-4 min-h-[100px]">
          <h3 className="text-lg font-semibold">To do</h3>
          {input.length > 0 &&
            input.map((item) => (
              <div className="flex gap-2">
                <p>{item}</p>
                <button onClick={() => handleNext(item, "toDo")}>▶️</button>
              </div>
            ))}
        </div>
        <div className="border-2 border-black p-4 min-h-[100px]">
          <h3 className="text-lg font-semibold">In Progress</h3>
          {progressTodos.length > 0 &&
            progressTodos.map((item) => (
              <div className="flex gap-2">
                <p>{item}</p>
                <button onClick={() => handleNext(item, "inProgress")}>
                  ▶️
                </button>
              </div>
            ))}
        </div>
        <div className="border-2 border-black p-4 min-h-[100px]">
          <h3 className="text-lg font-semibold">Done</h3>
          {doneTodos.length > 0 &&
            doneTodos.map((item) => (
              <div className="flex gap-2">
                <p>{item}</p>
                {/* <button onClick={() => handleNext(item)}>▶️</button> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoBoard;
