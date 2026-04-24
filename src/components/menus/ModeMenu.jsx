import { Link, useSearchParams } from 'react-router-dom';
import ExitButton from "../ExitButton";
import TurnYourDeviceMessage from "../TurnYourDeviceMessageLandscape";

export default function ModeMenu() {
  const [searchParams] = useSearchParams();
  const octave = searchParams.get('octave');

  const getPath = (queryString) => {
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

    if (queryString) {
      return path + queryString;
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

          @media (min-height: 950px) {
            h1 {
              position: static;
              margin-top: 0;
            }
          }
        `}
      </style>
      <TurnYourDeviceMessage />
      <span className="center" id="menu-btns">
        <h1>Выберите режим</h1>
        <Link to={'/note-notation?octave=' + octave} className="btn btn-orange btn-menu">Разминка</Link>
        <Link to={{
          pathname: '/mode/note-reading',
          search: octave && '?octave=' + octave,
        }} className="btn btn-red btn-menu">Чтение нот</Link>
        <ExitButton />
      </span>
    </>
  );
}
