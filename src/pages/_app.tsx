import { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";

import logoImg from "../assets/logoWhite.png";
import { globalStyles } from "../styles/global";
import {
  ButtonCart,
  Container,
  Header,
  QuantityNotification,
} from "../styles/pages/app";
import { Basket } from "@phosphor-icons/react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} width={150} alt="" />
        </Link>

        <ButtonCart type="button">
          <Basket size={24} color="white" />
          <QuantityNotification>1</QuantityNotification>
        </ButtonCart>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
