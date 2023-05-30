import { Check } from "@phosphor-icons/react";
import PricingData from "./CardData";
import { SinglePricing } from "./SinglePricing";
import { Pricing } from "../../components/Princing";

export function CardPricing() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-3 gap-8">
          {PricingData.map((pricing, key) => {
            return <SinglePricing pricing={pricing} />;
          })}
        </div>
      </div>
    </section>
  );
}
