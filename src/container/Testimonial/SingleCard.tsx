import { Card } from "../../types/card";

export function SingleCard({ card }: { card: Card }) {
  const { autor, paragraph, avatar, founder } = card;

  return (
    <div className="bg-[#1d2144] p-8 rounded-md shadow-sm">
      <div className="flex items-center space-x-1 mb-5">
        <svg width="18" height="16" viewBox="0 0 18 16">
          <path
            d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z"
            className="fill-yellow"
          ></path>
        </svg>
        <svg width="18" height="16" viewBox="0 0 18 16">
          <path
            d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z "
            className="fill-yellow"
          ></path>
        </svg>
        <svg width="18" height="16" viewBox="0 0 18 16">
          <path
            d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z "
            className="fill-yellow"
          ></path>
        </svg>
        <svg width="18" height="16" viewBox="0 0 18 16">
          <path
            d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z "
            className="fill-yellow"
          ></path>
        </svg>
        <svg width="18" height="16" viewBox="0 0 18 16">
          <path
            d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z "
            className="fill-yellow"
          ></path>
        </svg>
      </div>
      <p className="text-white text-base mb-5">{paragraph}</p>
      <hr className="border border-body-color/10 mb-5" />

      <div className="flex items-center">
        <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
          <img
            className="absolute h-full w-full inset-0 object-cover"
            src="https://online.wits.ac.za/wp-content/uploads/2021/06/Wits-Type-of-manager-1210x423.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-medium text-lg">{autor}</span>
          <span className="text-body-color text-base">{founder}</span>
        </div>
      </div>
    </div>
  );
}
