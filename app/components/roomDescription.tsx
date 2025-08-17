import { RentBox } from "./rentBox";
import { OwnersDescription } from "./ownerDescription";
import { RoomRating } from "./roomRating";
import { BenefitStatement } from "./benifitStatements";

export function RoomDescription({
  location,
  description,
}: {
  location: string;
  description: string;
}) {
  return (
    <div className="mt-5 ">
      <div className="flex flex-row justify-between">
        <div className="w-[50rem]  flex flex-col">
          <text className="text-2xl font-semibold">
            Entire rental unit in Greater Noida, India
          </text>
          <text className="text-sm font-medium">
            2 guests · 1 bedroom · 1 bed · 1 bathroom
          </text>
          <RoomRating />
          <OwnersDescription />
        </div>
        <RentBox price="" />
      </div>
      <BenefitStatement
        logo={
          <svg
            width={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              d="M400 416C497.2 416 576 337.2 576 240C576 142.8 497.2 64 400 64C302.8 64 224 142.8 224 240C224 258.7 226.9 276.8 232.3 293.7L71 455C66.5 459.5 64 465.6 64 472L64 552C64 565.3 74.7 576 88 576L168 576C181.3 576 192 565.3 192 552L192 512L232 512C245.3 512 256 501.3 256 488L256 448L296 448C302.4 448 308.5 445.5 313 441L346.3 407.7C363.2 413.1 381.3 416 400 416zM440 160C462.1 160 480 177.9 480 200C480 222.1 462.1 240 440 240C417.9 240 400 222.1 400 200C400 177.9 417.9 160 440 160z"
              fill="none"
              stroke="black"
              strokeWidth="32"
            />
          </svg>
        }
        name="Great check-in experience"
        description="Recent guests loved the smooth start to this stay"
      />
      <BenefitStatement
        logo={
          <svg
            width={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              d="M384 128L448 128L448 544C448 561.7 462.3 576 480 576L512 576C529.7 576 544 561.7 544 544C544 526.3 529.7 512 512 512L512 128C512 92.7 483.3 64 448 64L352 64L352 64L192 64C156.7 64 128 92.7 128 128L128 512C110.3 512 96 526.3 96 544C96 561.7 110.3 576 128 576L352 576C369.7 576 384 561.7 384 544L384 128zM256 320C256 302.3 270.3 288 288 288C305.7 288 320 302.3 320 320C320 337.7 305.7 352 288 352C270.3 352 256 337.7 256 320z"
              fill="none"
              stroke="black"
              strokeWidth="32"
            />
          </svg>
        }
        name="Self check-in"
        description="Check yourself in with the lockbox."
      />
      <div className="border-b w-[46rem] border-slate-300 pb-10 ">
        <BenefitStatement
          logo={
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                d="M320.3 192L235.7 51.1C229.2 40.3 215.6 36.4 204.4 42L117.8 85.3C105.9 91.2 101.1 105.6 107 117.5L176.6 256.6C146.5 290.5 128.3 335.1 128.3 384C128.3 490 214.3 576 320.3 576C426.3 576 512.3 490 512.3 384C512.3 335.1 494 290.5 464 256.6L533.6 117.5C539.5 105.6 534.7 91.2 522.9 85.3L436.2 41.9C425 36.3 411.3 40.3 404.9 51L320.3 192zM351.1 334.5C352.5 337.3 355.1 339.2 358.1 339.6L408.2 346.9C415.9 348 418.9 357.4 413.4 362.9L377.1 398.3C374.9 400.5 373.9 403.5 374.4 406.6L383 456.5C384.3 464.1 376.3 470 369.4 466.4L324.6 442.8C321.9 441.4 318.6 441.4 315.9 442.8L271.1 466.4C264.2 470 256.2 464.2 257.5 456.5L266.1 406.6C266.6 403.6 265.6 400.5 263.4 398.3L227.1 362.9C221.5 357.5 224.6 348.1 232.3 346.9L282.4 339.6C285.4 339.2 288.1 337.2 289.4 334.5L311.8 289.1C315.2 282.1 325.1 282.1 328.6 289.1L351 334.5z"
                fill="none"
                stroke="black"
                strokeWidth="32"
              />
            </svg>
          }
          name="Arush is a Superhost"
          description="Superhosts are experienced, highly rated Hosts."
        />
      </div>
      <DetailedDescription />
      <SleepingPlace />
      <Offerings />
    </div>
  );
}

function DetailedDescription() {
  return (
    <div className="w-[46rem] gap-10 border-b mb-15 border-slate-300">
      <div className="">
        Fully furnished luxurious studio apartment with all modern amenities
        available in Greater Noida near Metro station.
      </div>
      <br></br>
      <div>
        Luxurious , Specious and Couple friendly studio in Greater Noida Near
        Expo Mart.
      </div>
      <br></br>
      <div>
        <div className="text-md font-semibold">The space</div>
        <div>
          Fully furnished luxurious studio apartment with all amenities
          available in Greater Noida with a close proximity of Pari Chawk
        </div>
      </div>
      <br></br>
      <button className="bg-slate-100 rounded-xl mb-10 p-3 font-[500] hover:cursor-pointer hover:bg-slate-200">
        Show more
      </button>
    </div>
  );
}

function SleepingPlace() {
  return (
    <div className="w-[46rem] flex flex-col gap-5 pb-10 border-b border-slate-300 ">
      <div className="text-xl font-[500]">Where you sleep</div>
      <img
        className="rounded-xl"
        width={300}
        src={
          "https://expressinnindia.com/wp-content/uploads/2024/07/Freesia-God-23.jpg"
        }
      />
      <div>
        <div className="text-lg font-[400]">Bedroom</div>
        <div className="text-sm text-slate-400">1 double bed</div>
      </div>
    </div>
  );
}

function Offerings() {
  return (
    <div className="w-[46rem] mt-10 flex flex-col pb-10 border-b border-slate-300 mb-10  ">
      <div className="text-xl font-semibold">What this place Offers</div>
      <div className="grid grid-cols-2">
        <BenefitStatement
          logo={
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M272 208C272 155 229 112 176 112C123 112 80 155 80 208C80 261 123 304 176 304C229 304 272 261 272 208zM316.4 240C301.9 304.1 244.5 352 176 352C96.5 352 32 287.5 32 208C32 128.5 96.5 64 176 64C244.5 64 301.9 111.9 316.4 176L388.2 176C397 166.2 409.8 160 424 160L528 160C554.5 160 576 181.5 576 208C576 234.5 554.5 256 528 256L424 256C409.8 256 397 249.8 388.2 240L316.4 240zM176 144C211.3 144 240 172.7 240 208C240 243.3 211.3 272 176 272C140.7 272 112 243.3 112 208C112 172.7 140.7 144 176 144zM432 304C445.3 304 456 314.7 456 328L456 336L552 336C565.3 336 576 346.7 576 360C576 373.3 565.3 384 552 384L312 384C298.7 384 288 373.3 288 360C288 346.7 298.7 336 312 336L408 336L408 328C408 314.7 418.7 304 432 304zM320 528L320 416L544 416L544 528C544 554.5 522.5 576 496 576L368 576C341.5 576 320 554.5 320 528zM80 384L208 384C234.5 384 256 405.5 256 432C256 458.5 234.5 480 208 480L192 480C192 497.7 177.7 512 160 512L96 512C78.3 512 64 497.7 64 480L64 400C64 391.2 71.2 384 80 384zM208 448C216.8 448 224 440.8 224 432C224 423.2 216.8 416 208 416L192 416L192 448L208 448zM56 528L232 528C245.3 528 256 538.7 256 552C256 565.3 245.3 576 232 576L56 576C42.7 576 32 565.3 32 552C32 538.7 42.7 528 56 528z" />
            </svg>
          }
          name="Kitchen"
          description=""
        />
        <BenefitStatement
          logo={
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M320 160C229.1 160 146.8 196 86.3 254.6C73.6 266.9 53.3 266.6 41.1 253.9C28.9 241.2 29.1 220.9 41.8 208.7C113.7 138.9 211.9 96 320 96C428.1 96 526.3 138.9 598.3 208.7C611 221 611.3 241.3 599 253.9C586.7 266.5 566.4 266.9 553.8 254.6C493.2 196 410.9 160 320 160zM272 496C272 469.5 293.5 448 320 448C346.5 448 368 469.5 368 496C368 522.5 346.5 544 320 544C293.5 544 272 522.5 272 496zM200 390.2C188.3 403.5 168.1 404.7 154.8 393C141.5 381.3 140.3 361.1 152 347.8C193 301.4 253.1 272 320 272C386.9 272 447 301.4 488 347.8C499.7 361.1 498.4 381.3 485.2 393C472 404.7 451.7 403.4 440 390.2C410.6 356.9 367.8 336 320 336C272.2 336 229.4 356.9 200 390.2z" />
            </svg>
          }
          name="wifi"
          description=""
        />
        <BenefitStatement
          logo={
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M192 112C183.2 112 176 119.2 176 128L176 512C176 520.8 183.2 528 192 528L272 528L272 448C272 430.3 286.3 416 304 416L336 416C353.7 416 368 430.3 368 448L368 528L448 528C456.8 528 464 520.8 464 512L464 128C464 119.2 456.8 112 448 112L192 112zM128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z" />
            </svg>
          }
          name="Dedicated workspace"
          description=""
        />
        <BenefitStatement
          logo={
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M96 160L96 400L544 400L544 160L96 160zM32 160C32 124.7 60.7 96 96 96L544 96C579.3 96 608 124.7 608 160L608 400C608 435.3 579.3 464 544 464L96 464C60.7 464 32 435.3 32 400L32 160zM192 512L448 512C465.7 512 480 526.3 480 544C480 561.7 465.7 576 448 576L192 576C174.3 576 160 561.7 160 544C160 526.3 174.3 512 192 512z" />
            </svg>
          }
          name="43-inch HDTV with Netflix, Amazon Prime Video, Disney+"
          description=""
        />
        <BenefitStatement
          logo={
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M356.7 59.3L420.7 123.3C426.9 129.5 437.1 129.5 443.3 123.3L507.3 59.3C511.9 54.7 513.2 47.8 510.8 41.9C508.4 36 502.5 32 496 32L368 32C361.5 32 355.7 35.9 353.2 41.9C350.7 47.9 352.1 54.8 356.7 59.3zM196.7 36.7L132.7 100.7C128.1 105.3 126.8 112.2 129.2 118.1C131.6 124 137.5 128 144 128L272 128C278.5 128 284.3 124.1 286.8 118.1C289.3 112.1 287.9 105.2 283.3 100.7L219.3 36.7C213.1 30.5 202.9 30.5 196.7 36.7zM128 192C92.7 192 64 220.7 64 256L64 512C64 547.3 92.7 576 128 576L512 576C547.3 576 576 547.3 576 512L576 256C576 220.7 547.3 192 512 192L128 192zM224 288C250.5 288 272 309.5 272 336C272 362.5 250.5 384 224 384C197.5 384 176 362.5 176 336C176 309.5 197.5 288 224 288zM144 464C144 437.5 165.5 416 192 416L256 416C282.5 416 304 437.5 304 464L304 480C304 497.7 289.7 512 272 512L176 512C158.3 512 144 497.7 144 480L144 464zM336 464C336 437.5 357.5 416 384 416L448 416C474.5 416 496 437.5 496 464L496 480C496 497.7 481.7 512 464 512L368 512C350.3 512 336 497.7 336 480L336 464zM368 336C368 309.5 389.5 288 416 288C442.5 288 464 309.5 464 336C464 362.5 442.5 384 416 384C389.5 384 368 362.5 368 336z" />
            </svg>
          }
          name="Lift"
          description=""
        />
        <BenefitStatement
          logo={
            <svg
              width={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M139.8 368.8L65 99.7C64.3 97.2 64 94.7 64 92.2C64 76.6 76.6 64 92.2 64L546.4 64C562.7 64 576 77.2 576 93.6C576 95.2 575.9 96.9 575.6 98.5L498.6 560.1C497.1 569.3 489.1 576 479.8 576C470.6 576 462.7 569.4 461.1 560.4L400 224L371.2 367.9C369.3 377.2 361.1 384 351.6 384C342.4 384 334.4 377.8 332.2 368.9L304 256L274.6 432.2C273.1 441.3 265.2 448 256 448C246.8 448 238.9 441.3 237.4 432.2L208 256L179.9 368.3C177.6 377.5 169.3 384 159.8 384C150.5 384 142.3 377.8 139.8 368.8z" />
            </svg>
          }
          name="Air Conditioner"
          description=""
        />
        <BenefitStatement
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              viewBox="0 0 200 150"
            >
              <rect
                x="60"
                y="50"
                width="80"
                height="30"
                rx="10"
                ry="10"
                fill="none"
                stroke="black"
                stroke-width="4"
              />
              <polygon
                points="140,55 170,45 170,75 140,65"
                fill="none"
                stroke="black"
                stroke-width="4"
              />
              <rect
                x="80"
                y="80"
                width="20"
                height="30"
                rx="5"
                ry="5"
                fill="none"
                stroke="black"
                stroke-width="4"
              />
              <circle
                cx="70"
                cy="65"
                r="3"
                fill="none"
                stroke="black"
                stroke-width="2"
              />
              <circle
                cx="65"
                cy="60"
                r="3"
                fill="none"
                stroke="black"
                stroke-width="2"
              />
              <circle
                cx="65"
                cy="70"
                r="3"
                fill="none"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M90 110 Q85 120, 100 125 Q115 130, 110 120"
                fill="none"
                stroke="black"
                stroke-width="3"
              />
            </svg>
          }
          name="Hair Dryer"
          description=""
        />
        <BenefitStatement
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              viewBox="0 0 200 300"
            >
              <rect
                x="50"
                y="20"
                width="100"
                height="260"
                rx="10"
                ry="10"
                fill="none"
                stroke="black"
                stroke-width="6"
              />
              <line
                x1="50"
                y1="150"
                x2="150"
                y2="150"
                stroke="black"
                stroke-width="6"
              />
              <rect
                x="55"
                y="40"
                width="10"
                height="30"
                fill="none"
                stroke="black"
                stroke-width="6"
              />
              <rect
                x="55"
                y="170"
                width="10"
                height="30"
                fill="none"
                stroke="black"
                stroke-width="6"
              />
            </svg>
          }
          name="Fridge"
          description=""
        />
  <button className="w-60 bg-slate-100 rounded-xl mb-10 p-3 font-[500] hover:cursor-pointer hover:bg-slate-200">
       Show all 38 amenities
      </button>
      </div>
    </div>
  );
}
