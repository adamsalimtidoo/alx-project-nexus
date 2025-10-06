import type { DestinationProps } from "../types/componentTypes";

const DestinationCard = ({ name, color, img, distance }: DestinationProps) => {
  return (
    <div className="w-full ">
      <div className={` ${color} w-fit h-fit rounded-lg hover:shadow-2xl duration-500 ease-in-out`}>
        <img src={img} className="rounded-t-lg"/>
        <span className=" text-white flex flex-col space-y-2">
          <h1 className="pt-5 ml-2 text-2xl">{name}</h1>
          <p className="ml-2 text-sm  pb-8">{distance} miles away</p>
        </span>
      </div>
    </div>
  );
};

export default DestinationCard;
