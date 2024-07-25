import Logo from "@/assets/img/logo_header.svg";
import Image from "next/image";

const LogoHeader = () => {
  return <Image src={Logo} alt="Logo" layout="fixed" />;
};

export default LogoHeader;
