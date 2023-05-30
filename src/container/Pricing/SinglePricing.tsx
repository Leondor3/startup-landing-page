import { Check } from "@phosphor-icons/react";
import { Pricing } from "../../types/princing";

export function SinglePricing({ pricing }: { pricing: Pricing }) {
  const { id, listings, paragraph, title, lists, plan } = pricing;

  return (
    <div className="bg-[#1d2144] p-8 flex flex-col items-center rounded-md w-full relative">
      <div className="flex justify-between w-full mb-4">
        <h3 className="text-white text-3xl font-bold">
          {title}
          {/* <span className="text-body-color">/mo</span> */}
        </h3>
        <span className="text-white text-lg font-semibold">{plan}</span>
      </div>
      <p className="text-body-color mb-8">{paragraph}</p>
      <button className="bg-primary w-full py-4 rounded-md text-white font-bold mb-8">
        Start Free Trial
      </button>
      <hr className="border border-body-color/10 w-full " />
      <div className="flex flex-col items-start justify-start w-full mt-4 gap-4 ">
        <div className="flex gap-2 items-center">
          <Check
            width={22}
            height={22}
            weight="bold"
            className="bg-primary bg-opacity-10 text-primary p-1 rounded-full"
          />
          <span className="text-body-color">All UI Components</span>
        </div>
        <div className="flex gap-2 items-center">
          <Check
            width={22}
            height={22}
            weight="bold"
            className="bg-primary bg-opacity-10 text-primary p-1 rounded-full"
          />
          <span className="text-body-color">All UI Components</span>
        </div>
        <div className="flex gap-2 items-center">
          <Check
            width={22}
            height={22}
            weight="bold"
            className="bg-primary bg-opacity-10 text-primary p-1 rounded-full"
          />
          <span className="text-body-color">All UI Components</span>
        </div>
        <div className="flex gap-2 items-center">
          <Check
            width={22}
            height={22}
            weight="bold"
            className="bg-primary bg-opacity-10 text-primary p-1 rounded-full"
          />
          <span className="text-body-color">All UI Components</span>
        </div>
        <div className="flex gap-2 items-center">
          <Check
            width={22}
            height={22}
            weight="bold"
            className="bg-primary bg-opacity-10 text-primary p-1 rounded-full"
          />
          <span className="text-body-color">All UI Components</span>
        </div>
        <div className="absolute right-0 bottom-0">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            ></path>
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7" stop-opacity="0.62"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7" stop-opacity="0.62"></stop>
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
