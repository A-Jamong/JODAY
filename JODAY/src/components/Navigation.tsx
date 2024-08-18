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
  return <Status state="all" count="9" />;
};

export default Navigation;
