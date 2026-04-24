import { Link, useSearchParams } from 'react-router-dom';
import ExitButton from "../ExitButton";
import TurnYourDeviceMessage from "../TurnYourDeviceMessageLandscape";

export default function NoteReadingPage() {
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
        <h1>Чтение нот</h1>
        <Link to={getPath()} className="btn btn-blue btn-menu">Белые клавиши</Link>
        <Link to={{
          pathname: '/mode/note-reading/black-keys',
          search: octave && '?octave=' + octave,
        }} className="btn btn-green btn-menu"> Чёрные клавиши</Link>
        <Link to={{
          pathname: getPath(),
          search: '?mode=white-and-black-keys',
        }} className="btn btn-purple btn-menu">Белые и чёрные клавиши</Link>
        <ExitButton />
      </span>
    </>
  );
}
