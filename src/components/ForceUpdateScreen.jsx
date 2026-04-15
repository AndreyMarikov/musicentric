import Rocket from "../assets/rocket.svg";
import UpdateButton from "./UpdateButton";

function ForceUpdateScreen() {
  return (
    <>
      <span className="force-update-screen">
        <img src={Rocket} className="rocket"></img>
        <span style={{ marginBlock: 32 + "px", marginTop: 16 + "px" }}>
          <h2 style={{ marginBottom: 16 + "px" }}>Пришло время обновить ваше приложение</h2>
          <p>Обновите, чтобы получить наилучшие впечатления!</p>
        </span>
        <UpdateButton />
      </span>
    </>
  );
}

export default ForceUpdateScreen;
