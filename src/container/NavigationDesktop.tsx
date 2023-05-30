export default function NavigationDesktop() {
  return (
    <nav className="flex w-full items-center px-4 gap-4">
      {[
        ["Home", "#home"],
        ["About", "#about"],
        ["Blog", "#technology"],
        ["Support", "#experiences"],
        ["Pages", "#experiences"],
      ].map(([title, url]) => (
        <a
          href={url}
          className="rounded-lg px-3 py-2 text-white font-medium  hover:text-body-color transition text-base"
        >
          {title}
        </a>
      ))}
    </nav>
  );
}
