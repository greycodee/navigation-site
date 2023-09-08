export default function Card(props) {
  const {icon,title,desc} = props;
  return (
    <figure className=" min-w-[18rem] rounded-lg h-32 border border-[#27272A] bg-[#09090B] flex space-x-2 hover:border-[#b5b5ba]">
      <div className=" w-28 h-full flex justify-center items-center">
        <img src={icon} alt="" />   
      </div>
      <div className="pt-6 text-left space-y-4 h-full flex-1">
        <blockquote>
          <p className="text-lg font-medium">{title}</p>
        </blockquote>
        <figcaption className="font-medium text-xs">
          <div className=" text-slate-700 ">
            {desc}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}