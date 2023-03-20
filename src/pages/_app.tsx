import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import Image from "next/image";
import logoImg from "../assets/logoWhite.png";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} width={150} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
