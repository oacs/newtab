import { Clock } from "@/components/clocks";
import { Weather } from "@/components/weather";

export default () => {
  const currentDay = new Date().toDateString();
  return (
    <main className="min-h-screen grid grid-cols-4 px-8  gap-4   justify-items-center">
      <div className="text-7xl col-span-3 text-slate-200 mr-auto mt-auto">
        {currentDay}
      </div>
      <Clock className="text-5xl col-span-3 text-slate-200 mr-auto mb-auto" />

      <div className="mt-auto mb-8 mr-auto col-span-2 ">
        <img
          src="https://media.tenor.com/drxH1lO9cfEAAAAi/dark-souls-bonfire.gif"
          width="150"
          alt="Astro"
        />
      </div>
      <Weather className="col-span-2 mt-auto ml-auto mb-16" />
    </main>
  );
};
