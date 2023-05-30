import { Check } from "@phosphor-icons/react";
import { List } from "../../types/list";

const ListData: List[] = [
  {
    id: 1,
    icon: (
      <Check
        width={30}
        height={30}
        weight="bold"
        className="bg-primary bg-opacity-10 text-primary rounded-md p-1"
      />
    ),
    title: "Premium quality",
  },
  {
    id: 2,
    icon: (
      <Check
        width={30}
        height={30}
        weight="bold"
        className="bg-primary bg-opacity-10 text-primary rounded-md p-1"
      />
    ),
    title: "Tailwind CSS",
  },
  {
    id: 3,
    icon: (
      <Check
        width={30}
        height={30}
        weight="bold"
        className="bg-primary bg-opacity-10 text-primary rounded-md p-1"
      />
    ),
    title: "Use for lifetime",
  },
  {
    id: 4,
    icon: (
      <Check
        width={30}
        height={30}
        weight="bold"
        className="bg-primary bg-opacity-10 text-primary rounded-md p-1"
      />
    ),
    title: "Next.js",
  },
  {
    id: 5,
    icon: (
      <Check
        width={30}
        height={30}
        weight="bold"
        className="bg-primary bg-opacity-10 text-primary rounded-md p-1"
      />
    ),
    title: "Rich documentation",
  },
  {
    id: 6,
    icon: (
      <Check
        width={30}
        height={30}
        weight="bold"
        className="bg-primary bg-opacity-10 text-primary rounded-md p-1"
      />
    ),
    title: "Developer friendly",
  },
];

export default ListData;