"use client";
import React, { useEffect, useState } from "react";

interface PropsType {
  day: number; 
  min: number; 
  sec: number;
}

const CounterTwo: React.FC<PropsType> = ({ day, min, sec }) => {
  // Ensure valid initial values
  const initialHours = day >= 0 ? day * 24 : 0;
  const initialMinutes = min >= 0 && min < 60 ? min : 0;
  const initialSeconds = sec >= 0 && sec < 60 ? sec : 0;

  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) return prev - 1;

        if (minutes > 0 || hours > 0) {
          setMinutes((m) => (m > 0 ? m - 1 : 59));

          if (minutes === 0 && hours > 0) {
            setHours((h) => h - 1);
          }

          return 59;
        }

        clearInterval(timer);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes]);

  const formatTime = (value: number) => (value < 10 ? `0${value}` : `${value}`);

  return (
    <div>
      {hours > 0 || minutes > 0 || seconds > 0 ? (
        <h4>
          {formatTime(hours)}h {formatTime(minutes)}m {formatTime(seconds)}s
        </h4>
      ) : (
        <h4>Times Up!</h4>
      )}
    </div>
  );
};

export default CounterTwo;
