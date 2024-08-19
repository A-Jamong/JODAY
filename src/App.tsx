import React from "react";

import Logo from "./components/Logo/Logo";
import Title from "./components/Title/Title";
import TodayDate from "./components/Date/Date";
import Button from "./components/Button/Button";
import Navigation from "./components/Navigation/Navigation";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div>
      <Logo type="stereo" />
      <Title titleText="우리, 오늘 뭐할까?!" />
      <TodayDate />
      <Button label="생각났어?" type="primary" isShowIcon />
      <p className="divider"></p>
      <Navigation
        total={10}
        todoCount={10}
        completedCount={10}
        keepCount={20}
      />
      <TodoList />
    </div>
  );
};

export default App;
