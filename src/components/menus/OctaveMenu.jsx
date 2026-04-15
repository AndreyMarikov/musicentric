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

          .overlay {

          }
        `}
      </style>
      <TurnYourDeviceMessage />
      <h1>Выберите октаву</h1>
      <span className='center' id='menu-btns'>
        <Link to={{
          pathname: '/mode',
          search: '?octave=one-line'
        }} className="btn btn-green btn-menu">Первая октава 𝄞</Link>
        <Link to={{
          pathname: '/mode',
          search: '?octave=two-line'
        }} className="btn btn-orange btn-menu">Вторая октава 𝄞</Link>
        <Link to={{
          pathname: '/mode',
          search: '?octave=small'
        }} className="btn btn-blue btn-menu">Малая октава 𝄢</Link>
        <Link to={{
          pathname: '/mode',
          search: '?octave=great'
        }} className="btn btn-red btn-menu">Большая октава 𝄢</Link>
      </span>
    </>
  );
}
