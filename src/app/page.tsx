import { Clock } from "@/components/clocks";
import { Weather } from "@/components/weather";
import bonfire from "@/assets/dark-souls-bonfire.gif";
import Image from "next/image";
const App = () => {
  const currentDay = new Date().toDateString();
  return (
    <main className="m-auto grid h-full  min-h-[500px] max-w-3xl grid-cols-4 justify-items-center gap-4 px-8">
      <div className="col-span-4 mr-auto mt-auto text-7xl text-slate-200">
        {currentDay}
      </div>
      <Clock className="col-span-3 mb-auto mr-auto text-5xl text-slate-200" />

      <div className="col-span-2 mb-8 mr-auto mt-auto ">
        <Image src={bonfire} width="150" alt="Dark Souls Bonfire" />
      </div>
      <Weather className="col-span-2 mb-16 ml-auto mt-auto" />
    </main>
  );
};
export default App;
