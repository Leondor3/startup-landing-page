import { Check } from "@phosphor-icons/react";
import SectionTitle from "../common/SectionTitle";
import ListData from "../container/AboutList/ListData";

export function About() {
  return (
    <>
      <section className="bg-[#090e34] py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="flex">
            <div className="flex flex-col flex-1">
              <SectionTitle
                mb="44px"
                title="Crafted for Startup, SaaS and Business Sites."
                paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
              />
              <div className="max-w-[570px]">
                <div className="mx-[-12px] grid grid-cols-2 gap-4">
                  {ListData.map((item, key) => {
                    return (
                      <p className="flex gap-2 items-center" key={item.id}>
                        {item.icon}
                        <span className="text-body-color font-bold">
                          {item.title}
                        </span>
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full"
                src="https://startup.nextjstemplates.com/images/about/about-image.svg"
                alt=""
              />
            </div>
          </div>
          <hr className="mt-20 border-t border-body-color/20" />
        </div>
      </section>
      <section className="bg-[#090e34] pb-32">
        <div className="container">
          <div className="flex items-center text-left">
            <div className="w-1/2">
              <img src="https://startup.nextjstemplates.com/images/about/about-image-2.svg" />
            </div>
            <div className="w-1/2">
              <div className="wow fadeInUp max-w-[470px]">
                <div className="mb-6">
                  {" "}
                  <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Bug free code
                  </h2>
                  <p className="text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="mb-6">
                  {" "}
                  <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Premier support{" "}
                  </h2>
                  <p className="text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>{" "}
                <div className="mb-6">
                  {" "}
                  <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Next.js{" "}
                  </h2>
                  <p className="text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
