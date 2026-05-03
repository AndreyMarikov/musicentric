import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import CustomGoogleLoginButton from "./CustomGoogleLoginButton";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          body {
            background-position: 0 -120px;
          }

          h1 {
            position: static;
            margin-top: 0;
            margin-bottom: 28px;
            hyphens: auto;
            min-width: 100%;
          }
          
          p {
            margin-top: 28px;
          }

          .wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--white);
            position: fixed;
            bottom: 0;
            left: 0;
            padding-block: 60px;
            padding-inline: 24px;
            border-top-left-radius: 32px;
            border-top-right-radius: 32px;
            width: 100%;
          }
        `}
      </style>
      <span className="wrapper">
        <h1>С возвращением</h1>
        {/*
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            navigate("/");
          }}
          onError={() => { console.log("Login failed"); }}
          shape="pill"
          text="continue_with"
          logo_alignment="center"
          width={270} />
        */}
        {/*
        <CustomGoogleLoginButton text="signin" />
        */}
        <p>У вас нет аккаунта? <Link to="/signup">Зарегистрируйтесь</Link></p>
      </span>
    </>
  );
}

export default LoginPage;

