import { Logo } from "./logo";
import { NavigationBar } from "./navigationBar";
import { Searchbar, SearchButtons } from "./searchBar";
import { Settings } from "./settings";

export async function RoomTopbar() {
  return (
    <div className=" w-full border-b-2 border-b-slate-100 mt-3 ">
      <div className=" flex flex-row justify-center gap-60">
        <Logo />
        <div className="bg-white mt-5  border-2 border-slate-200 w-[20rem] h-12 rounded-full text-sm shadow-md flex flex-row  items-center relative font-semibold ">
          <div  className="flex flex-row">
            <SearchButtons width={5} text="text-left" name="Anywhere" />
          </div>
          <div className="h-8 border-r-1 border-slate-300"></div>
          <SearchButtons width={5} text="text-left" name="Anyweek" />
          <div className="h-8 border-r-1 border-slate-300"></div>
          <div
            className={`w-[120rem] h-full flex flex-row text-left hover:bg-[#F2F4F6]  rounded-full pr-2 justify-between items-center  `}
          >
            <SearchButtons width={5} text="text-left" name="Add guests" />
            <button className="bg-[#FF5C5C] w-8 h-8 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-[#D70040] absolute right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                width={20}
                fill="white"
                viewBox="0 0 640 640"
              >
                <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
              </svg>
            </button>
          </div>
        </div>
        <Settings />
      </div>
    </div>
  );
}
