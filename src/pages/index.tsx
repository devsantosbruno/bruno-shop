import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";

import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { HomeContainer, Product, SliderContainer } from "../styles/pages/home";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    breakpoints: {
      "(min-width: 320px)": {
        slides: {
          origin: "center",
          perView: 1,
          spacing: 12,
        },
      },
      "(min-width: 600px)": {
        slides: {
          origin: "center",
          perView: 1,
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

  return (
    <HomeContainer>
      <SliderContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} />
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          );
        })}
      </SliderContainer>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
