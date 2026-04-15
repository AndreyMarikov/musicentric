import { Link } from "react-router-dom";
import CustomGoogleLoginButton from "./CustomGoogleLoginButton";

function SignUpPage() {
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
        <h1>Создать аккаунт</h1>
        <CustomGoogleLoginButton text="signup" />
        <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
      </span>
    </>
  );
}

export default SignUpPage;

