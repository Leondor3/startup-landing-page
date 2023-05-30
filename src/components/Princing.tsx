import SectionTitle from "../common/SectionTitle";
import TogglePricing from "../common/TogglePricing";
import { CardPricing } from "../container/Pricing/CardPricing";

export function Pricing() {
  return (
    <section className="bg-[#090e34] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex items-center flex-col">
          <SectionTitle
            title="Simple and Affordable Pricing"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          <TogglePricing />
          <CardPricing />
        </div>
      </div>
    </section>
  );
}
