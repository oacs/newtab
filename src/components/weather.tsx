"use client";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

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
        "grid grid-cols-2 px-8 h-min rounded-md bg-stone-800 p-4 text-stone-300 justify-items-center " +
        className
      }
    >
      <div className="text-xs col-span-2 font-normal">Mississauga</div>
      <div className="my-2 col-span-2 text-4xl font-bold">
        {status == "loading" ? "--" : data?.current_weather.temperature}
        <span className="absolute">°</span>
      </div>

      <div className="text-xs">W Speed:</div>
      <div className="text-xs">W-Dir:</div>
      <div className="text-md">
        {status == "loading" ? "--" : data?.current_weather.windspeed}
        <span className="text-xs font-light">km/h</span>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/7178/7178896.png "
        width="20"
        className="invert"
        height="20"
        style={{
          rotate:
            status == "loading"
              ? "0"
              : data?.current_weather.winddirection + "deg",
        }}
        alt=""
        title=""
      />
    </div>
  );
};
