import React from "react";

import Logo from "./components/logo";
import Title from "./components/Title";
import TodayDate from "./components/Date";
import Button from "./components/Button";
import Navigation from "./components/Navigation";
// import { TodoList } from "./components/TodoList";

const App = () => {
  return (
    <div>
      <Logo type="stereo" />
      <Title titleText="우리, 오늘 뭐할까?" />
      <TodayDate />
      <Button label="생각났어?" type="primary" isShowIcon />
      <Navigation />
      {/* <TodoList /> */}
    </div>
  );
};

export default App;
