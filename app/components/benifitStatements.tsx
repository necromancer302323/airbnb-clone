export function BenefitStatement({name,description,logo}:{name:string,description:string,logo:any}){
    return <div className="flex mt-5 gap-2">
        {logo}
<div>
<div className="text-lg font-[400]">{name}</div>
<div className="text-md text-slate-500">{description}</div>
    </div>
    </div>
}