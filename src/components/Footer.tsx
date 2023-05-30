import { FacebookLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <section className="py-16 pb-40 bg-[#0d123e] relative">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-8">
            <img
              width={140}
              src="https://startup.nextjstemplates.com/images/logo/logo.svg"
              alt=""
            />
            <p className="text-body-color w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lobortis.
            </p>
            <div className="flex gap-2">
              <FacebookLogo fill="#fff" size={22} />
              <FacebookLogo fill="#fff" size={22} />
              <FacebookLogo fill="#fff" size={22} />
              <FacebookLogo fill="#fff" size={22} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="">
              <ul className="flex flex-col gap-4">
                <span className="text-white text-2xl font-bold mb-4">
                  Useful Links
                </span>
                <li className="text-body-color">Blog</li>
                <li className="text-body-color">Pricing</li>
                <li className="text-body-color">About</li>
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-col gap-4">
                <span className="text-white text-2xl font-bold mb-4">
                  Terms
                </span>
                <li className="text-body-color">TOS</li>
                <li className="text-body-color">Privacy Policy</li>
                <li className="text-body-color">Refund Policy</li>
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-col gap-4">
                <span className="text-white text-2xl font-bold mb-4">
                  Support & Help
                </span>
                <li className="text-body-color">Open Source Ticket</li>
                <li className="text-body-color">Terms of Use</li>
                <li className="text-body-color">About</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center bg-[#131b52] absolute left-0 right-0 bottom-0">
        <div className="py-8">
          <a href="https://github.com/leondor3/" className="text-white underline">Desenvolvido por Leandro de Araujo</a>
        </div>
      </div>
    </section>
  );
}
