import { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";

import logoImg from "../assets/logoWhite.png";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} width={150} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
