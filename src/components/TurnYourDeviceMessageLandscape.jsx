import RotatePhoneGif from "../assets/RotatePhone.gif";
import { useSearchParams } from "react-router-dom";

export default function TurnYourDeviceMessage() {
  const [searchParams] = useSearchParams();
  const language = searchParams.get('lang');

  return (
    <span id="turn-your-device-message2" className='warning-message center'>
      <img style={{ transform: "rotate(90deg)" }} src={RotatePhoneGif}></img>
      <p>{language == "russian" ? "Пожалуйста, поверните ваше устройство для удобства" : "Please, rotate your device"}.</p>
    </span>
  );
}
