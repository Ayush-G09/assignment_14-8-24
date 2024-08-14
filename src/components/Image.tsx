import React from "react";

type Props = {
  src: string;
  width?: string;
  height?: string;
};

function CustomImage({ src, width = "40px", height = "40px" }: Props) {
  return <img src={src} width={width} height={height} />;
}

export default CustomImage;
