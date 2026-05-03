import FlagOfUS from "../assets/Flag_of_US.svg";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

function EnglishOption() {
  const [searchParams, setSearchParams] = useSearchParams();
  const optionRef = useRef(null);

  useEffect(() => {
    const option = optionRef.current;

    function setLanguageToEnglish() {
      localStorage.setItem("lang", "english");
      setSearchParams({ lang: "english" }, { replace: true });
    }

    option.addEventListener("click", setLanguageToEnglish);

    return () => {
      option.removeEventListener("click", setLanguageToEnglish);
    };
  }, []);

  return (
    <div ref={optionRef} className='option'>
      <img src={FlagOfUS} className='flag'></img>
      <p>English</p>
    </div>
  );
}

export default EnglishOption;
