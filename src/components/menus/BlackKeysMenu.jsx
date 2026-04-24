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

          @media (min-height: 950px) {
            h1 {
              position: static;
              margin-top: 0;
              margin-bottom: 32px !important;
            }
          }
        `}
      </style>
      <TurnYourDeviceMessage />
      <span className="center" id="menu-btns">
        <h1 style={{ margin: 0, top: 86 + "px" }}>Чёрные клавиши</h1>
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-sharps',
        }} className="btn btn-cyan btn-menu"><p style={{ position: "absolute" }}>♯</p>Диезы</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-flats',
        }} className="btn btn-purple btn-menu"><p style={{ position: "absolute", fontSize: 28 + "px" }}>♭</p>Бемоли</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-sharps-and-flats',
        }} className="btn btn-red btn-menu" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><p style={{ position: "absolute", left: 24 + "px", fontSize: 24 + "px" }}><p style={{ fontSize: 28 + "px", display: "inline" }}>♭</p> ♯</p>Диезы<br></br>и бемоли</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=with-double-sharps-and-double-flats',
        }} className="btn btn-green btn-menu" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ position: "absolute", left: 24 + "px", fontSize: 24 + "px" }}>𝄫 <p style={{ fontSize: 32 + "px", display: "inline" }}>𝄪</p></p>
          Дубль-диезы
          <br></br>
          и дубль-бемоли
        </Link>
        <ExitButton />
      </span>
    </>
  );
}
