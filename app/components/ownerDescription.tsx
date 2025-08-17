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
      <div className="text-sm text-slate-600">Superhost · 8 months hosting</div>
      </div>
    </div>
  );
}
