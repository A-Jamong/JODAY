import React from "react";

interface LogoProps {
  type: "stereo" | "mono";
}

export const Logo = ({ type }: LogoProps) => {
  return (
    <img
      className={`logo`}
      alt={`${type} 속성의 이미지`}
      //? "@/assets/icons/type-Mono.svg" < 이렇게 경로 설정하면 안 되고 /src/ 붙여서 절대경로로 설정하거나 Public 폴더로.
      src={type === "mono" ? "logoMono.svg" : "logoStereo.svg"}
    />
  );
};
