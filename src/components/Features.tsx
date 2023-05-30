import SectionTitle from "../common/SectionTitle";
import featuresData from "../container/Features/FeaturesData";
import SingleFeature from "../container/Features/SingleFeature";

export function Feature() {
  return (
    <section className="bg-[#0b113a] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Main Features"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
