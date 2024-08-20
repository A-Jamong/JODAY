import React from "react";

// Props에 titleText 추가
// 바뀔 가능성이 없어보여서 타입이 필요없나 싶었으나 이런 식으로 title을 받으면 범용성이 좋을 것 같아서 추가.
interface TitleProps {
  titleText: string;
}

const Title = ({ titleText }: TitleProps) => {
  return <h4>{titleText}</h4>;
};

export default Title;
