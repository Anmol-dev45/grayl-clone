import { nav_items } from "@/utils";
import Image from "next/image";
import NavItem from "./NavItem";
import User from "../User";
import Search from "../Search";
import Cart from "../Cart";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="px-4 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Image
            src={
              "https://grayl.com/cdn/shop/files/GRAYL_600px_WHITE_e6297bd7-1f8f-4644-b0a1-d2945e88d2a8.png?v=1614755971&width=140"
            }
            alt="GRAYL Logo"
            width={140}
            height={40}
          />
        </div>
        <ul className="flex items-center gap-2">
          {nav_items.map((item) => (
            <li key={item.label}>
              <NavItem {...item} />
            </li>
          ))}
        </ul>
        <div className="flex gap-6 items-center text-white">
          <User />
          <Search />
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
