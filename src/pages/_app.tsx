import { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";
import { Basket, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../assets/logoWhite.png";
import shirtTeste from "../assets/shirts/1.png";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import {
  ButtonCart,
  CloseContainer,
  DialogContent,
  DialogTitle,
  FinishShopping,
  ImageContainer,
  Product,
  ProductDetails,
  ProductName,
  ProductPrice,
  ProductRemove,
  ProductsList,
  QuantityKey,
  QuantityNotification,
  QuantityValue,
  ShoppingDetail,
  ValueKey,
  ValueValue,
} from "../styles/components/Cart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Dialog.Root>
        <Header>
          <Link href="/">
            <Image src={logoImg} width={150} alt="" />
          </Link>

          <Dialog.Trigger asChild>
            <ButtonCart type="button">
              <Basket size={24} color="white" />
              <QuantityNotification>1</QuantityNotification>
            </ButtonCart>
          </Dialog.Trigger>
        </Header>

        <Component {...pageProps} />

        <Dialog.Portal>
          <DialogContent>
            <div>
              <CloseContainer>
                <Dialog.Close asChild>
                  <X size={24} color="#8D8D99" />
                </Dialog.Close>
              </CloseContainer>

              <DialogTitle>Sacola de compras</DialogTitle>

              <ProductsList>
                <Product>
                  <ImageContainer>
                    <Image src={shirtTeste} width={96} height={96} alt="" />
                  </ImageContainer>

                  <ProductDetails>
                    <div>
                      <ProductName>Camiseta Beyond the Limits</ProductName>
                      <ProductPrice>R$ 79,90</ProductPrice>
                    </div>
                    <div>
                      <ProductRemove type="button">Remover</ProductRemove>
                    </div>
                  </ProductDetails>
                </Product>
              </ProductsList>
            </div>

            <div>
              <ShoppingDetail>
                <QuantityKey>Quantidade</QuantityKey>
                <QuantityValue>3 itens</QuantityValue>
              </ShoppingDetail>

              <ShoppingDetail>
                <ValueKey>Valor total</ValueKey>
                <ValueValue>R$ 270,00</ValueValue>
              </ShoppingDetail>
              <FinishShopping type="button">Finalizar compra</FinishShopping>
            </div>
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </Container>
  );
}
