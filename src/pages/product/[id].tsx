import Head from 'next/head';
import Image from 'next/image';

import { useCart } from '../../hooks/useCart';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

export default function Product() {
  const { addCart, checkIfAlreadyInCart, productStore } = useCart();
  const { id, name, imageUrl, price, description } = productStore;

  const isProductAlreadyInCart = checkIfAlreadyInCart(id);

  function handleBuyProduct() {
    if (!checkIfAlreadyInCart(id)) {
      addCart(productStore);
    }
  }

  return (
    <>
      <Head>
        <title>{name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={imageUrl} width={520} height={480} alt='' />
        </ImageContainer>

        <ProductDetails>
          <h1>{name}</h1>
          <span>{price}</span>

          <p>{description}</p>

          <button disabled={isProductAlreadyInCart} onClick={handleBuyProduct}>
            {isProductAlreadyInCart ? 'Product on cart' : 'Buy'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}
