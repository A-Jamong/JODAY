import React from "react";
import S from "./Status.module.css";

interface StatusProps {
  count: number;
  state: "doing" | "done" | "all" | "keep";
}

const Status = ({ count = 0, state }: StatusProps) => {
  return (
    <div className={S.status}>
      <span className={`${S.label} ${S[state]}`}>
        {state === "all" && "모두"}
        {state === "doing" && "할일"}
        {state === "done" && "한일"}
        {state === "keep" && "보관"}
      </span>
      <span className={`${S.count} ${S[`state-${state}`]}`}>
        <div className={S.element}>{count}</div>
      </span>
    </div>
  );
};

export default Status;
