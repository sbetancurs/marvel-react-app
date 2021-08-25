const Loader = () => {
  return (
    <>
      <div className='container'>
        <div className='loader'></div>
      </div>
      <style jsx>{`
        .loader {
          width: 5rem;
          height: 5rem;
          border: 0.5rem solid var(--bg-secondary);
          border-radius: 50%;
          border-left: 0.5rem solid transparent;
          animation: spinner 1s linear infinite normal;
        }

        .container {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.1);
          z-index: 900;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes spinner {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <style jsx global>{`
        body,
        main {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Loader;
