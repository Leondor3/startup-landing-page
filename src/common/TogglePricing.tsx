import * as Switch from "@radix-ui/react-switch";
import { CardPricing } from "../container/Pricing/CardPricing";

const TogglePricing = () => (
  <form>
    <div
      className="flex items-center"
      style={{ display: "flex", alignItems: "center" }}
    >
      <label
        className="text-base leading-relaxed pr-[15px] font-semibold text-primary data-[state=checked]:text-primary"
        htmlFor="monthly"
      >
        Monthly
      </label>
      <Switch.Root
        className="w-[48px] h-[20px] bg-[#1d2144] rounded-full relative data-[state=checked]:bg-black outline-none cursor-default"
        id="monthly"
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-primary rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
      <label className="text-white leading-relaxed font-semibold  pl-[15px]">
        Yearly
      </label>
    </div>
  </form>
);

export default TogglePricing;
