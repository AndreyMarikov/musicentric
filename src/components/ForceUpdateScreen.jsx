import { useSearchParams } from "react-router-dom";
import Rocket from "../assets/rocket.svg";
import UpdateButton from "./UpdateButton";

function ForceUpdateScreen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const language = searchParams.get('lang');

  return (
    <>
      <span className="force-update-screen">
        <img src={Rocket} className="rocket"></img>
        <span style={{ marginBlock: 32 + "px", marginTop: 16 + "px" }}>
          <h2 style={{ marginBottom: 16 + "px" }}>{language == "russian" ? "Пришло время обновить ваше приложение" : "We're better than ever"}</h2>
          <p>{language == "russian" ? "Обновите, чтобы получить наилучшие впечатления" : "Let's update to have the best experience"}!</p>
        </span>
        <UpdateButton />
      </span>
    </>
  );
}

export default ForceUpdateScreen;
