import Image from "next/image";
import LogoSvg from "../../public/images/logo-light.svg";

export default function Logo() {
  return (
    <Image
      className="lg:hover:rotate-180"
      src={LogoSvg}
      alt="logo"
      height={60}
    />
  );
}
