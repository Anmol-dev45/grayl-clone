import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#3d3935] text-white py-12 px-6 ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 items-center">
          <div className="w-full">
            <Link href={"/"}>
              <Image
                src={
                  "https://grayl.com/cdn/shop/files/GRAYL_600px_WHITE_e6297bd7-1f8f-4644-b0a1-d2945e88d2a8.png?v=1614755971&width=100"
                }
                alt="GRAYL Logo"
                width={100}
                height={40}
                className="mb-6"
              />
            </Link>
            <div className="md:pr-72 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20">
              <div>
                <span className="font-normal text-3xl">#empoweradventure</span>
                <p className="leading-snug text-justify my-3">
                  Sign-up to get first dibs on new products, exclusive offers,
                  featured content and giveaways.{" "}
                </p>
                Email
                <div className="mt-4 flex items-center gap-2">
                  <a href="">
                    <FaInstagram size={26} />
                  </a>
                  <a href="">
                    <FaInstagram size={26} />
                  </a>
                  <a href="">
                    <FaInstagram size={26} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="uppercase tracking-[0.2em] text-sm mb-1">
                  Explore
                </p>
                <Link href={"#"}>About</Link>
                <Link href={"#"}>Stories</Link>
                <Link href={"#"}>Giving Back</Link>
                <Link href={"#"}>Ambassadors</Link>
                <Link href={"#"}>Reviews</Link>
                <Link href={"#"}>Press</Link>
                <Link href={"#"}>Affiliates</Link>
                <Link href={"#"}>Jobs</Link>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="uppercase tracking-[0.2em] text-sm mb-1">
                  Support
                </p>
                <Link href={"#"}>Shipping</Link>
                <Link href={"#"}>Support</Link>
                <Link href={"#"}>Quickstart Guides</Link>
                <Link href={"#"}>Guarantee</Link>
                <Link href={"#"}>Returns & Exchanges</Link>
                <Link href={"#"}>Accessibility</Link>
                <Link href={"#"}>Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="text-xs tracking-wider leading-2 flex flex-col items-center gap-4">
            <p>© 2024 GRAYL® / SEATTLE USA</p>
            <p>Powered by Shopify</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
