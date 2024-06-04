import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { MouseEvent } from "react";
import Stripe from "stripe";
import { ProductProps } from "../contexts/CartContext";
import { useCart } from "../hooks/useCart";
import { stripe } from "../lib/stripe";

import { Handbag } from "@phosphor-icons/react";
import "keen-slider/keen-slider.min.css";
import { HomeContainer, LinkToProduct, Product } from "../styles/pages/home";

interface HomeProps {
  products: ProductProps[];
}

export default function Home({ products }: HomeProps) {
  console.log("productsproducts ==>", products);
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    breakpoints: {
      "(min-width: 320px)": {
        slides: {
          origin: "center",
          perView: 1.1,
          spacing: 12,
        },
      },
      "(min-width: 600px)": {
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 12,
        },
      },
      "(min-width: 720px)": {
        slides: {
          origin: "center",
          perView: 2,
          spacing: 24,
        },
      },
      "(min-width: 1600px)": {
        slides: {
          origin: "center",
          perView: 3,
          spacing: 32,
        },
      },
    },
  });

  const { addCart, checkIfAlreadyInCart } = useCart();

  function handleAddCart(
    event: MouseEvent<HTMLButtonElement>,
    product: ProductProps
  ) {
    event.preventDefault();

    if (checkIfAlreadyInCart(product.id)) return;

    addCart(product);
  }

  return (
    <>
      <Head>
        <title>Home | Bruno Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <LinkToProduct href={`/product/${product.id}`} prefetch={false} />
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <button
                  onClick={(event) => handleAddCart(event, product)}
                  disabled={checkIfAlreadyInCart(product.id)}
                >
                  <Handbag size={32} color="#FFFFFF" weight="bold" />
                </button>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  console.log("responseresponse ==>", response);

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price.unit_amount! / 100),
      priceNumber: price.unit_amount,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
