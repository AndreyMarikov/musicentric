import { Link, useSearchParams } from 'react-router-dom';
import ExitButton from "../ExitButton";
import TurnYourDeviceMessage from "../TurnYourDeviceMessageLandscape";

export default function BlackKeysMenu() {
  const [searchParams] = useSearchParams();
  const octave = searchParams.get('octave');

  const getPath = () => {
    let path;

    if (octave == 'great') {
      path = '/great-octave';
    } else if (octave == 'small') {
      path = '/small-octave';
    } else if (octave == 'two-line') {
      path = '/two-line-octave';
    } else {
      path = '/one-line-octave';
    }

    return path;
  }

  return (
    <>
      <style>
        {`
          #root {
            justify-content: end !important;
          }

          @media (max-height: 670px) {
            body{
              background-image: none;
            }

            h1 {
              top: 64px !important;
            }
          }
          
          @media (max-height: 625px) {
            h1 {
              top: 32px !important;
            }
          }
          
          @media (max-height: 600px) {
            h1 {
              top: 16px !important;
            }
          }
        `}
      </style>
      <TurnYourDeviceMessage />
      <h1 style={{ margin: 0, top: 86 + "px" }}>Чёрные клавиши</h1>
      <span className="center" id="menu-btns">
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-sharps',
        }} className="btn btn-cyan btn-menu">Диезы ♯</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-flats',
        }} className="btn btn-purple btn-menu">Бемоли ♭</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-sharps-and-flats',
        }} className="btn btn-red btn-menu">Диезы ♯<br></br>и бемоли ♭</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-double-sharps-and-double-flats',
        }} className="btn btn-green btn-menu">
          Дубль-диезы 𝄪
          <br></br>
          и дубль-бемоли 𝄫
        </Link>
        <ExitButton />
      </span>
    </>
  );
}
