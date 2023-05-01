"use client";
import { useState, useEffect, FC } from "react";

export const Clock: FC<{ className: string }> = ({ className }) => {
  const [hours, setHours] = useState<string>("--");
  const [minutes, setMinutes] = useState<string>("--");
  const [ampm, setAMPM] = useState<string>("");

  function refreshClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setHours((hours % 12 || 12).toString().padStart(2, "0"));
    setMinutes(minutes);
    setAMPM(hours >= 12 ? "PM" : "AM");
  }

  useEffect(() => {
    refreshClock();
    const timerId = setInterval(refreshClock, 60 * 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span
      className={className + " flex items-end text-4xl text-tokyonight-800"}
    >
      <div className="font-bold">{hours}</div>
      <div className="mr-1 font-medium text-tokyonight-300">:</div>
      <div className="font-bold">{minutes}</div>
      <div className="ml-2 font-medium text-tokyonight-400"> {ampm}</div>
    </span>
  );
};
