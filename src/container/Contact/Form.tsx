import SectionTitle from "../../common/SectionTitle";
import { Newsletter } from "./Newsletter";

export function Form() {
  return (
    <div className="">
      <div className="flex gap-8">
        <div className="flex flex-col flex-1 bg-[#1d2144] p-12 rounded-md">
          {" "}
          <h1 className="text-3xl text-white font-bold mb-4">
            Need Help? Open a Ticket
          </h1>
          <p className="text-body-color text-base font-semibold">
            Our support team will get back to you ASAP via email.
          </p>
          <form className="w-full flex flex-col gap-4 mt-8">
            <div className="flex gap-8 w-full">
              <fieldset className="flex flex-col gap-4 w-full">
                <label className="text-white">Your name</label>
                <input
                  className="bg-[#242b51] w-full p-4 rounded-md shadow-md outline-none focus:none"
                  placeholder="Enter your name"
                  type="text"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-4 w-full">
                <label className="text-white">Your email</label>
                <input
                  className="bg-[#242b51] w-full p-4 rounded-md shadow-md outline-none focus:none"
                  placeholder="Enter your email"
                  type="text"
                />
              </fieldset>
            </div>
            <fieldset className="flex flex-col gap-4 mb-4">
              <label className="text-white">Your Message</label>
              <textarea
                placeholder="Enter your Message"
                className="bg-[#242b51] w-full p-4 rounded-md shadow-md outline-none focus:none"
              />
            </fieldset>
            <button className="bg-primary font-semibold text-white text-base  py-4 rounded-md flex w-52 justify-center">
              Subscribe Ticket
            </button>
          </form>
        </div>
        <Newsletter />
      </div>
    </div>
  );
}
