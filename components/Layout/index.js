import Head from "next/head";
import Menu from "../Menu";
import { breakpoints } from "../../styles/theme";
// import ScrollTo from "components/ScrollTo";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Recomended</title>
        <meta name='description' content='This app is for frontend test' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main id='main' className='main'>
        {children}
        {/* <ScrollTo /> */}
      </main>
      <Menu />
      <style jsx>{`
        main {
          padding: 1rem 1rem;
          padding-bottom: 5rem;
          min-height: 100vh;
          height: 100%;
        }
        @media (min-width: ${breakpoints.ipad}) {
          main {
            padding: 1rem 5rem;
            padding-bottom: 5rem;
          }
      `}</style>
    </>
  );
};

export default Layout;
