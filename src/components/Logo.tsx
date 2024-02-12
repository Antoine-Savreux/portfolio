import Image from "next/image";
import logoImage from "@/../public/images/logo-light.png";

export default function Logo() {
  return <Image src={logoImage} alt="logo" height={75} />;
}
