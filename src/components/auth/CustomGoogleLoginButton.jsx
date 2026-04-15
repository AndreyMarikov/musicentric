import GoogleLogo from "../../assets/Google__G__logo.svg";

function CustomGoogleLoginButton(props) {
  return (
    <button className="btn-secondary btn btn-menu">
      <img src={GoogleLogo} className="google-logo"></img>
      {props.text === "signin" ? "Войти" : "Зарегистрироваться"}
    </button>
  );
}

export default CustomGoogleLoginButton;
