"use client";
import { useState, useEffect, FC } from "react";

export const Clock: FC<{ className: string }> = ({ className }) => {
  const [date, setDate] = useState<Date>();

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    refreshClock();
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span className={className + " text-4xl text-stone-300"}>
      {date?.toLocaleTimeString() || "- - :- - :- -  MM"}
    </span>
  );
};
