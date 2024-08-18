import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "@/styles/globals.css";

// vite 클라이언트 환경에서 사용가능한 환경 변수
// BASE_URL : '/' 은 퍼블릭 폴더 가리킴
// console.log(import.meta.env);

const domN = document.getElementById("react-app");
if (!domN) {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
} else {
  ReactDOM.createRoot(domN).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
