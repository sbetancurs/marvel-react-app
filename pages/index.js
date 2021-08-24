/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Menu from "/components/Menu";
import Characters from "/components/characters";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Recomended</title>
          <meta name='description' content='This app is for frontend test' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <Characters />
          <Menu />
        </main>
      </div>
      <style jsx>{`
        main {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: start;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}
