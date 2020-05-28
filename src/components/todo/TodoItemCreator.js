import React, {useState} from "react";
import {uuid} from "uuidv4";
import {useSetRecoilState} from "recoil";
import {todoListState} from "../TodoList";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: uuid(),
        text: inputValue,
        isComplete: false
      }
    ]);
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
