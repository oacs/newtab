"use client";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import ArrowUpIcon from "./arrow";

export const weatherSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),
  current_weather: z.object({
    temperature: z.number(),
    windspeed: z.number(),
    winddirection: z.number(),
    weathercode: z.number(),
    time: z.string(),
  }),
  daily_units: z.object({
    time: z.string(),
    weathercode: z.string(),
    temperature_2m_max: z.string(),
    temperature_2m_min: z.string(),
    apparent_temperature_max: z.string(),
    apparent_temperature_min: z.string(),
    sunrise: z.string(),
    sunset: z.string(),
    windspeed_10m_max: z.string(),
  }),
  daily: z.object({
    time: z.array(z.string()),
    weathercode: z.array(z.number()),
    temperature_2m_max: z.array(z.number()),
    temperature_2m_min: z.array(z.number()),
    apparent_temperature_max: z.array(z.number()),
    apparent_temperature_min: z.array(z.number()),
    sunrise: z.array(z.string()),
    sunset: z.array(z.string()),
    windspeed_10m_max: z.array(z.number()),
  }),
});

const fetchWeather = async () => {
  const weatherDataResponse = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=43.58&longitude=-79.63&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,windspeed_10m_max&current_weather=true&timezone=auto"
  );
  const rawData = await weatherDataResponse.json();
  return weatherSchema.parse(rawData);
};

const useWeather = () => {
  return useQuery({
    queryKey: ["weather"],
    queryFn: () => fetchWeather(),
  });
};

export const Weather: FC<{ className: string }> = ({ className }) => {
  const { data, status } = useWeather();
  return (
    <div
      className={
        "grid h-min grid-cols-2 justify-items-center rounded-md bg-tokyonight-900 p-4 px-8 text-stone-300 " +
        className
      }
    >
      <div className="col-span-2 text-xs font-normal text-tokyonight-800 opacity-80">
        Mississauga
      </div>
      <div className="col-span-2 my-2 text-4xl font-bold text-tokyonight-400">
        {status == "loading" ? "--" : data?.current_weather.temperature}
        <span className="absolute text-tokyonight-100">°</span>
      </div>

      <div className="text-xs text-tokyonight-800 opacity-80">W Speed:</div>
      <div className="text-xs text-tokyonight-800 opacity-80">W-Dir:</div>
      <div className="text-md text-tokyonight-400">
        {status == "loading" ? "--" : data?.current_weather.windspeed}
        <span className="text-xs font-light text-tokyonight-400 opacity-80">
          km/h
        </span>
      </div>
      <ArrowUpIcon
        fill="#ff757f"
        rotate={data?.current_weather.winddirection ?? 0}
      />
    </div>
  );
};
