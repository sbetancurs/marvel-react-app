import Menu from "../Menu";
// import ScrollTo from "components/ScrollTo";

const Layout = ({ children }) => {
  return (
    <>
      <main id='main' className='main'>
        <Menu />
        {children}
        {/* <ScrollTo /> */}
      </main>
      <style jsx>{`
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Layout;
