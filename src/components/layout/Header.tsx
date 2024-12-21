import logo from "@/assets/images/image.png";
import Image from "next/image";
const Header = () => {
  return (
    <header className="wrapper flex items-center h-20">
      <Image
        src={logo}
        height={104}
        width={104}
        alt="big star"
        className="h-8 w-auto"
      />
    </header>
  );
};

export default Header;
