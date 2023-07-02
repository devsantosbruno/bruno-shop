import { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";
import { Basket, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../assets/logoWhite.png";
import shirtTeste1 from "../assets/shirts/1.png";
import shirtTeste2 from "../assets/shirts/2.png";
import shirtTeste3 from "../assets/shirts/3.png";
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

interface ProductProps {
  id: number;
  imageUrl: any;
  name: string;
  price: number;
}

export default function App({ Component, pageProps }: AppProps) {
  const arrayProducts: ProductProps[] = [
    {
      id: 0,
      imageUrl: shirtTeste1,
      name: "Camiseta Beyond the Limits",
      price: 79.9,
    },
    {
      id: 1,
      imageUrl: shirtTeste2,
      name: "Camiseta TESTE 2",
      price: 59.9,
    },
    {
      id: 2,
      imageUrl: shirtTeste3,
      name: "Camiseta TESTE 3",
      price: 99.9,
    },
  ];

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
          <Dialog.Overlay />
          <DialogContent>
            <div>
              <CloseContainer>
                <Dialog.Close asChild>
                  <X size={24} color="#8D8D99" />
                </Dialog.Close>
              </CloseContainer>

              <DialogTitle>Sacola de compras</DialogTitle>

              {arrayProducts && (
                <ProductsList>
                  {arrayProducts.map((product: ProductProps) => (
                    <Product key={product.id}>
                      <ImageContainer>
                        <Image
                          src={product.imageUrl}
                          width={96}
                          height={96}
                          alt=""
                        />
                      </ImageContainer>

                      <ProductDetails>
                        <div>
                          <ProductName>{product.name}</ProductName>
                          <ProductPrice>R$ {product.price}</ProductPrice>
                        </div>
                        <div>
                          <ProductRemove type="button">Remover</ProductRemove>
                        </div>
                      </ProductDetails>
                    </Product>
                  ))}
                </ProductsList>
              )}
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
