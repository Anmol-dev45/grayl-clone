import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
export interface NavItemProps {
  label: string;
  href: string;
  items?: NavItemProps[];
}
const NavItem: React.FC<NavItemProps> = ({ label, href, items }) => {
  return (
    <div className="py-2 px-4 relative text-lg  text-white font-normal tracking-wide">
      <div className="flex items-center gap-2 peer hover:border-b-black">
        <Link href={href}>{label}</Link>
        <IoIosArrowDown />
      </div>
      <div className="absolute left-0 top-9 px-4 py-6 bg-white text-black hidden peer-hover:block hover:block">
        <ul className="flex items-start flex-col gap-3">
          {items?.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavItem;
