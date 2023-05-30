export default function NavigationMobile() {
  return (
    <nav className="bg-dark flex flex-col justify-start items-end absolute right-16 top-28 w-[238px] px-4 py-6 border-body-color/50 h-max z-20 border gap-4">
      {[
        ["Home", "#home"],
        ["About", "#about"],
        ["Blog", "#technology"],
        ["Support", "#experiences"],
      ].map(([title, url]) => (
        <a className="w-full text-left rounded-none text-white hover:text-body-color cursor-pointer lg:space-x-12">
          {title}
        </a>
      ))}
    </nav>
  );
}
