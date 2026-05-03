import { Link, useSearchParams } from 'react-router-dom';
import ExitButton from "../ExitButton";
import TurnYourDeviceMessage from "../TurnYourDeviceMessageLandscape";
import Dropdown from '../Dropdown';
import { useEffect } from 'react';

export default function ModeMenu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const octave = searchParams.get('octave');
  const language = searchParams.get('lang');

  useEffect(() => {
    setSearchParams({ lang: localStorage.getItem("lang") }, { replace: true });
  }, []);

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
      <Dropdown />
      <span className="center" id="menu-btns">
        <h1>{language == "russian" ? "Выберите режим" : "Choose mode"}</h1>
        <Link to={'/note-notation?octave=' + octave + "&lang=" + language} className="btn btn-orange btn-menu">{language == "russian" ? "Разминка" : "Warm-up"}</Link>
        <Link to={{
          pathname: '/mode/note-reading',
          search: octave && '?octave=' + octave + "&lang=" + language,
        }} className="btn btn-red btn-menu">{language == "russian" ? "Чтение нот" : "Sight-reading"}</Link>
        <ExitButton />
      </span>
    </>
  );
}
