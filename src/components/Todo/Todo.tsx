import React from "react";
import S from "./Todo.module.css";

interface TodoProps {
  todoText: string;
  todoMemo: string;
  time: Date;
  done: boolean;
  keep: boolean;
}

const Todo = ({ todoText, todoMemo, time, done, keep }: TodoProps) => {
  return <p className={S.divider}></p>;
};

export default Todo;
