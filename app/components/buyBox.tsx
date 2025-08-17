export function BuyBox({ price }: { price: string }) {
  return (
    <div className="shadow-2xl w-[21rem] h-64 pt-7 pl-5 pr-5 rounded-2xl flex flex-col ">
      <text className="text-xl font-semibol font-sans">Add dates for prices</text>
      <div className="border rounded-lg mt-2 text-sm hover:cursor-pointer">
        <div className="  flex flex-row justify-between pl-2 pr-2">
          <div>
            <div>Check-In</div>
            <div className="text-sm font-extralight">Add Date</div>
          </div>
          <div className="border-l-1 "></div>
          <div>
            <div>Check-Out</div>
            <div className="text-sm font-extralight">Add Date</div>
          </div>
        </div>
        <div className="border-t justify-between flex flex-row pl-2 pr-2 items-center">
          <div>
            <div>Guests</div>
            <div className="text-sm font-light">1 guest</div>
          </div>
          <svg
            width={30}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
          </svg>
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#d94d74] to-[#dd2a5c] text-white font-bold p-3 rounded-full mt-5 hover:cursor-pointer">
        Check availablity
      </button>
    </div>
  );
}
