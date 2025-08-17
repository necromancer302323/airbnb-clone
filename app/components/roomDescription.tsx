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
              stroke-width="32"
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
              stroke-width="32"
            />
          </svg>
        }
        name="Self check-in"
        description="Check yourself in with the lockbox."
      />
      <div className="border-b w-[46rem] border-slate-300 pb-10">
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
              stroke-width="32"
            />
          </svg>
        }
        name="Arush is a Superhost"
        description="Superhosts are experienced, highly rated Hosts."
      />
      </div>
    </div>
  );
}
