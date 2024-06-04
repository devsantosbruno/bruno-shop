import Head from 'next/head';
import Link from 'next/link';
import { SuccessContainer } from '../styles/pages/success';

export default function Success() {
  return (
    <>
      <Head>
        <title>Purchase success | Bruno Shop</title>

        <meta name='robots' content='noindex' />
      </Head>

      <SuccessContainer>
        <h1>Purchase success!</h1>

        <p>
          Congratulations! Your purchase of it`s already on its way to your
          house.
        </p>

        <Link href='/'>Back to Products</Link>
      </SuccessContainer>
    </>
  );
}
