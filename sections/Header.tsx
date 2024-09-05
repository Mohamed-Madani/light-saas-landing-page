import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0">
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
      <div className="inline-flex gap-1 items-center">
        <p>Get started for free</p>
        <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
      </div>
    </div>
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
      <Image src={Logo} alt="Saas logo" width={40} height={40} />
      <MenuIcon className="w-5 h-5 " />
        </div>
      </div>
    </div>
    </header>
  );
};
