import Link from "next/link";

export function Card({ img, link }: { img: string[]; link: string }) {
  return (
    <div className="relative">
      <Link
        href="http://localhost:3000/room/1"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="rounded-3xl h-64 hover:cursor-pointer"
          alt="img"
          width={260}
          src={
            "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <div className="absolute top-0 mt-2 ml-2  flex flex-row justify-between w-full">
          <button className=" pr-2 pl-2  bg-[#FCFCFF] rounded-full text-xs font-sans">
            Guests favourite{" "}
          </button>
          <svg
            className="p-1"
            fill="white"
            height={40}
            width={60}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
          </svg>
        </div>
      </Link>
      <div className="text-left flex flex-col">
        <text className="text-lg">Hotel in greater noida</text>
        <text className=" text-sm text-slate-500">₹3,386 for 2 nights</text>
      </div>
    </div>
  );
}

export function HostCard() {
  return (
    <div className="grid grid-cols-3 shadow-2xl pt-5 w-[25rem] rounded-3xl h-50">
      <div className=" flex flex-col items-center col-span-2">
        <img
          className="rounded-full h-18"
          width={80}
          src={
            "https://thumbs.dreamstime.com/b/african-man-looking-to-right-smiling-side-isolated-white-background-35360971.jpg"
          }
        ></img>
        <div>Arush</div>
        <div className="text-sm text-slate-400 font-normal">SuperHost</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="border-b border-slate-300 mr-2 pr-10 pb-2">
          <div className="text-xl">125</div>
          <div className="text-xs font-normal">Reviews</div>
        </div>
        <div className="border-b border-slate-300  mr-2  pr-10 pb-2">
          <div className="text-xl">125</div>
          <div className="text-xs font-normal">Reviews</div>
        </div>
        <div className="border-b border-slate-300  mr-2  pr-10 pb-2">
          <div className="text-xl">125</div>
          <div className="text-xs font-normal">Reviews</div>
        </div>
      </div>
    </div>
  );
}
