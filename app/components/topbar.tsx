import { Logo } from "./logo";
import { NavigationBar } from "./navigationBar";
import { Searchbar } from "./searchBar";
import { Settings } from "./settings";

export async function Topbar() {
  return (
    <div className="bg-slate-50 w-full  border-b-2 border-b-slate-100  ">
      <div className=" flex flex-row justify-around">
        <Logo />
        <NavigationBar />
        <Settings />
      </div>
      <div className="flex  justify-center">
        <Searchbar />
      </div>
    </div>
  );
}