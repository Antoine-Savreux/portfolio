import Image from "next/image";
import logoImage from "@/../public/images/logo-light.png";
import LogoSvg from "../../public/images/logo-light.svg";

export default function Logo() {
  return <Image src={LogoSvg} alt="logo" height={60} />;
}
