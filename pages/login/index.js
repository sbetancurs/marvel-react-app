import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const EMAIL = "admin@admin.com";
const PASSWORD = "123";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    error: false,
  });

  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (EMAIL === login.email && PASSWORD === login.password) {
      localStorage.setItem("session", EMAIL);
      router.push("/");
    }

    setLogin({ ...login, error: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, error: false, [name]: value });
  };

  return (
    <>
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type='email'
            name='email'
            placeholder='email'
            value={login.email}
            onChange={handleChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={login.password}
            onChange={handleChange}
          />
          <button className='btn'>Login</button>
        </form>
        {login.error && (
          <div className='alert'>
            <p className='alert-danger'>
              Oops! The email or password is wrong, please check it!.
            </p>
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          align-items: start;
          justify-content: start;
          flex-direction: column;
        }
        h1 {
          color: var(--main-title);
        }

        .form {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        input {
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          border-radius: 5px;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Login;
