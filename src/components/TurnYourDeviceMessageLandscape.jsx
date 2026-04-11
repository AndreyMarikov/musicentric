import RotatePhoneGif from "../assets/RotatePhone.gif";

export default function TurnYourDeviceMessage() {
  return (
    <span id="turn-your-device-message2" className='warning-message center'>
      <img src={RotatePhoneGif}></img>
      <p>Пожалуйста, поверните ваше устройство для удобства.</p>
    </span>
  );
}
