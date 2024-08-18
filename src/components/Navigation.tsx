import React from "react";
import Status from "./Status";

interface NavagationProps {
  total: number;
  todoCount: number;
  completedCount: number;
  keepCount: number;
}

const Navigation = ({
  total,
  todoCount,
  completedCount,
  keepCount,
}: NavagationProps) => {
  return (
    <nav>
      <Status state="all" count={total} />
      <Status state="doing" count={todoCount} />
      <Status state="done" count={completedCount} />
      <Status state="keep" count={keepCount} />
    </nav>
  );
};

export default Navigation;
