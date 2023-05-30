import SectionTitle from "../common/SectionTitle";

export function Blog() {
  return (
    <section className="py-16 bg-[#0d123e]">
      <div className="container">
        <div className="flex flex-col items-center">
          <SectionTitle
            title="Our Latest Blogs"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          <div className="grid grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-md shadow-sm">
              <a className="h-[250px] block w-full relative">
                <span className="absolute z-20 right-6 top-4 bg-primary p-2 rounded-3xl px-4 text-white">
                  Creative
                </span>
                <img
                  className="absolute inset-0 w-full object-cover"
                  src="https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-01.jpg&w=3840&q=75"
                />
              </a>
              <div className="bg-[#1d2144] w-full py-10 px-8 space-y-4">
                <h1 className="text-white text-2xl font-bold">
                  Best UI components for modern websites
                </h1>
                <p className="text-body-color text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sit amet dictum neque, laoreet dolor.
                </p>
                <hr className="border border-body-color/10" />
              </div>
            </div>
            <div className="overflow-hidden rounded-md shadow-sm">
              <a className="h-[250px] block w-full relative">
                <span className="absolute z-20 right-6 top-4 bg-primary p-2 rounded-3xl px-4 text-white">
                  Computer
                </span>
                <img
                  className="absolute inset-0 w-full object-cover"
                  src="https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-02.jpg&w=3840&q=75"
                />
              </a>
              <div className="bg-[#1d2144] w-full py-10 px-8 space-y-4">
                <h1 className="text-white text-2xl font-bold">
                  9 simple ways to improve your design skills
                </h1>
                <p className="text-body-color text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sit amet dictum neque, laoreet dolor.
                </p>
                <hr className="border border-body-color/10" />
              </div>
            </div>
            <div className="overflow-hidden rounded-md shadow-sm">
              <a className="h-[250px] block w-full relative">
                <span className="absolute z-20 right-6 top-4 bg-primary p-2 rounded-3xl px-4 text-white">
                  Design
                </span>
                <img
                  className="absolute inset-0 w-full object-cover"
                  src="https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-03.jpg&w=3840&q=75"
                />
              </a>
              <div className="bg-[#1d2144] w-full py-10 px-8 space-y-4">
                <h1 className="text-white text-2xl font-bold">
                  Tips to quickly improve your coding speed.
                </h1>
                <p className="text-body-color text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  sit amet dictum neque, laoreet dolor.
                </p>
                <hr className="border border-body-color/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
