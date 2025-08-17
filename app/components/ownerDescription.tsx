import { HostCard } from "./card";

export function OwnersDescription() {
  return (
    <div className="w-[46rem]  border-b-1 h-18 border-slate-300 mt-5  flex flex-row gap-10">
      <img
        className="rounded-full h-10"
        width={30}
        src={
          "https://thumbs.dreamstime.com/b/african-man-looking-to-right-smiling-side-isolated-white-background-35360971.jpg"
        }
      ></img>
      <div>
        <div className="text-lg font-semibold">Hosted by Arush</div>
        <div className="text-sm text-slate-600">
          Superhost · 8 months hosting
        </div>
      </div>
    </div>
  );
}

export function HostDetailedDescription() {
  return (
    <div className="flex gap-10  w-[70rem] border-b border-slate-300 pb-10">
      <div className="text-xl font-semibold flex flex-col gap-5 ">
        Meet you host
        <HostCard />
        <div className="flex items-center gap-2 text-sm font-normal">
          <svg
            width={30}
            viewBox="0 0 100 180"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="50"
              cy="60"
              rx="40"
              ry="55"
              fill="none"
              stroke="black"
              stroke-width="3"
            />

            <polygon points="45,110 55,110 50,120" fill="black" />

            <path
              d="M50 120 C 45 135, 55 150, 50 165"
              stroke="black"
              stroke-width="1.5"
              fill="none"
            />
          </svg>
          Born in the 80s
        </div>
        <div className="flex items-center gap-2 text-sm font-normal">
          <svg
            width={40}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              d="M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224V520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520V259.8zM128 331.5V448C128 501 214 544 320 544C426 544 512 501 512 448V331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z"
              fill="none"
              stroke="black"
              stroke-width="24"
            />
          </svg>
          Where I went to school: Roorkee, Uttarakhand
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <div className="text-xl font-semibold">Arush is a Superhost</div>
        <div>
          Superhosts are experienced, highly rated hosts who are committed to
          providing great stays for guests.
        </div>
        <div className="text-xl font-semibold">Host details</div>
        <div>
          Response rate: 100%
          <br />
          Responds within an hour
        </div>
        <button className="w-60 bg-slate-100 rounded-xl mb-10 p-3 font-[500] hover:cursor-pointer hover:bg-slate-200">
          Message Host
        </button>
      </div>
    </div>
  );
}
