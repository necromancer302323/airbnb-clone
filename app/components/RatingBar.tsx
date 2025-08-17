export function RatingBar(){
    return <div className="w-40">
  <div>
    <dd className="flex items-center mb-2">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 me-2 w-4">5</span>
      <div className="w-full rounded-sm h-1.5 bg-slate-300">
        <div
          className="rounded-sm"
          style={{ width: "100%", height: "6px", backgroundColor: "black" }}
        ></div>
      </div>
    </dd>
    <dd className="flex items-center mb-2">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 me-2 w-4">4</span>
      <div className="w-full rounded-sm h-1.5 bg-slate-300">
        <div
          className="rounded-sm"
          style={{ width: "80%", height: "6px", backgroundColor: "black" }}
        ></div>
      </div>
    </dd>
    <dd className="flex items-center mb-2">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 me-2 w-4">3</span>
      <div className="w-full rounded-sm h-1.5 bg-slate-300">
        <div
          className="rounded-sm"
          style={{ width: "60%", height: "6px", backgroundColor: "black" }}
        ></div>
      </div>
    </dd>
    <dd className="flex items-center mb-2">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 me-2 w-4">2</span>
      <div className="w-full rounded-sm h-1.5 bg-slate-300">
        <div
          className="rounded-sm"
          style={{ width: "40%", height: "6px", backgroundColor: "black" }}
        ></div>
      </div>
    </dd>
  </div>
  <div>
    <dd className="flex items-center">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 me-2 w-4">1</span>
      <div className="w-full rounded-sm h-1.5 bg-slate-300">
        <div
          className="rounded-sm"
          style={{ width: "20%", height: "6px", backgroundColor: "black" }}
        ></div>
      </div>
    </dd>
  </div>
</div>
}