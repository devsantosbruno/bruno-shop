import Link from "next/link";
import Image from "next/image";
import { Cart } from "../Cart";

import logoImg from "../../assets/logoWhite.png";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} width={150} alt="" />
      </Link>

      <Cart />
    </HeaderContainer>
  );
}
