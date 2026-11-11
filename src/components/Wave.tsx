import type { FC } from "react";
import { type  WaveProps } from "../Type";

const Wave: FC<WaveProps> = ({
  color,
  backgroundColor,
  direction = "bottom",
  height = 150,
  className = "",
}) => {
  return (
    <svg
      className={`block w-full ${className} mt-0 pt-0`}
      style={{ height: `${height}px`, backgroundColor }}
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          direction === "bottom"
            ? "M0 0 C300 0 400 150 720 150 C1040 150 1140 0 1440 0 V150 H0 Z"
            : "M0 150 C300 150 400 0 720 0 C1040 0 1140 150 1440 150 V0 H0 Z"
        }
        fill={color}
      />
    </svg>
  );
};

export default Wave;