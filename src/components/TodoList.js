import React from "react";
import {atom, selector, useRecoilValue} from "recoil";
import TodoItemCreator from "./todo/TodoItemCreator";
import TodoItem from "./todo/TodoItem";
import TodoListFilters from "./todo/TodoListFilters";
import TodoListStats from "./todo/TodoListStats";

const todoListState = atom({
  key: "todoListState",
  default: []
});

const FILTER_VIEWS = {
  SHOW_ALL: "Show All",
  SHOW_COMPLETED: "Show Completed",
  SHOW_UNCOMPLETED: "Show Uncompleted"
};

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: FILTER_VIEWS.SHOW_ALL
});

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case FILTER_VIEWS.SHOW_COMPLETED:
        return list.filter(item => item.isComplete);
      case FILTER_VIEWS.SHOW_UNCOMPLETED:
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  }
});

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map(todoItem => (
        <TodoItem item={todoItem} />
      ))}
    </>
  );
};

export {
  todoListState,
  FILTER_VIEWS,
  todoListFilterState,
  filteredTodoListState
};

export default TodoList;
