import React from "react";

type ArrowUpIconProps = {
  fill: string;
  rotate: number;
};

const ArrowUpIcon = ({ fill, rotate }: ArrowUpIconProps) => {
  return (
    <div style={{ transform: `rotate(${rotate}deg)` }}>
      <svg
        height="24"
        viewBox="0 0 24 24"
        fill={fill}
        stroke={fill}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </div>
  );
};

export default ArrowUpIcon;
