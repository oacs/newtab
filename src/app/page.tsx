import { Clock } from "@/components/clocks";
import { Weather } from "@/components/weather";
import bonfire from "@/assets/dark-souls-bonfire.gif";
import Image from "next/image";
import BookmarkList, { defaultBookmarks } from "@/components/bookmarks";
const App = () => {
  const currentDay = new Date().toDateString();
  return (
    <main className="m-auto grid h-full  min-h-[500px] max-w-3xl grid-cols-10 justify-items-center gap-4 px-8">
      <div className="col-span-6 mr-auto mt-auto grid grid-cols-2 text-7xl ">
        <div className="text-tokyonight-800">{currentDay.slice(0, 3)}</div>
        <div className="text-tokyonight-400">{currentDay.slice(8, 10)}</div>
        <div className="text-tokyonight-800">{currentDay.slice(4, 7)}</div>
        <div className="text-tokyonight-400">{currentDay.slice(11)}</div>
      </div>
      <div className="col-span-4 row-span-4 h-full w-full">
        <BookmarkList bookmarks={defaultBookmarks} />
      </div>
      <div className="col-span-3 mb-8 mr-auto mt-auto ">
        <Image src={bonfire} width="150" alt="Dark Souls Bonfire" />
      </div>
      <Weather className="col-span-3 mb-16 ml-auto mt-auto" />
    </main>
  );
};
export default App;
