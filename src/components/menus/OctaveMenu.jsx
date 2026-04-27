import { Link } from 'react-router-dom'
import TurnYourDeviceMessage from "../TurnYourDeviceMessageLandscape";

export default function OctaveMenu() {
  return (
    <>
      <style>
        {`
          #root {
            justify-content: end !important;
          }

          @media (min-height: 950px) {
            h1 {
              position: static;
              margin-top: 0;
            }
          }

          @media (max-height: 530px) {
            body {
              background-image: none;
            }

            h1 {
              margin-top: 32px;
            }
          }
        `}
      </style>
      <TurnYourDeviceMessage />
      <span className='center' id='menu-btns'>
        <h1>Выберите октаву</h1>
        <Link to={{
          pathname: '/mode',
          search: '?octave=one-line'
        }} className="btn btn-green btn-menu"><p style={{ position: "absolute" }}>&#x1D11E;</p>Первая октава<div></div></Link>
        <Link to={{
          pathname: '/mode',
          search: '?octave=two-line'
        }} className="btn btn-orange btn-menu"><p style={{ position: "absolute" }}>&#x1D11E;</p>Вторая октава<div></div></Link>
        <Link to={{
          pathname: '/mode',
          search: '?octave=small'
        }} className="btn btn-blue btn-menu"><p style={{ position: "absolute" }}>&#119074;</p>Малая октава<div></div></Link>
        <Link to={{
          pathname: '/mode',
          search: '?octave=great'
        }} className="btn btn-red btn-menu"><p style={{ position: "absolute" }}>&#119074;</p>Большая октава<div></div></Link>
      </span>
    </>
  );
}
