import SectionTitle from "../common/SectionTitle";
import shapeSvg from "../assets/shape.svg";
import videoThumb from "../assets/video.jpg";

export function Video() {
  return (
    <div className="bg-[#090e34] py-16 md:py-20 lg:py-28 relative z-10">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        <div className="flex items-center justify-center relative z-20">
          <img src={videoThumb} />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <img src={shapeSvg} alt="shape" className="w-full" />
        </div>
      </div>
    </div>
  );
}
