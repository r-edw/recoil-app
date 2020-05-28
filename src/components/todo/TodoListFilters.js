import React from "react";
import {useRecoilState} from "recoil";
import {FILTER_VIEWS, todoListFilterState} from "../TodoList";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({target: {value}}) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={FILTER_VIEWS.SHOW_ALL}>All</option>
        <option value={FILTER_VIEWS.SHOW_COMPLETED}>Completed</option>
        <option value={FILTER_VIEWS.SHOW_UNCOMPLETED}>Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
