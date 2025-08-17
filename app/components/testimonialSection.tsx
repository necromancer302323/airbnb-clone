export function TestimonialSection() {
  return (
    <div className="grid grid-cols-2 gap-2 w-[70rem] mt-5 border-b border-slate-300">
      {[...Array(6)].map((_, i) => {
        return (
          <article key={i} className="bg-white p-6 rounded-lg ">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 me-4 rounded-full"
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt="Jese Leos"
              />
              <div className="font-medium text-gray-900">
                <p>
                  Jese Leos{" "}
                  <time
                    dateTime="2014-08-16T19:00:00"
                    className="block text-sm text-gray-500"
                  >
                    Joined in August 2014
                  </time>
                </p>
              </div>
            </div>

            <div className="flex items-center mb-2 space-x-1 rtl:space-x-reverse">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                  aria-hidden="true"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
                aria-hidden="true"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <h3 className="ms-2 text-sm font-semibold text-gray-900">
                Thinking to buy another one!
              </h3>
            </div>

            <footer className="mb-5 text-sm text-gray-500">
              <p>
                Reviewed in the United Kingdom on{" "}
                <time dateTime="2017-03-03T19:00:00">March 3, 2017</time>
              </p>
            </footer>

            <p className="mb-2 text-gray-700">
              Had a great stay! The place was clean, comfortable, and
              well-located. Host was friendly and helpful throughout. Highly
              recommend this Airbnb for anyone visiting the area. Would ...
            </p>

            <a
              href="#"
              className="block mb-5 font-medium text-black underline text-xl"
            >
              Show more
            </a>
          </article>
        );
      })}
      <div className="flex items-baseline-last gap-2">
        <button className="w-60 bg-slate-100 rounded-xl mb-10 p-3 font-[500] hover:cursor-pointer hover:bg-slate-200">
          Show all 38 amenities
        </button>
        <text className="text-xs underline text-slate-600">
          Learn how reviews work
        </text>
      </div>
    </div>
  );
}
