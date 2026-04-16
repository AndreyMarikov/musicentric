import { useEffect, useRef } from "react";

function UpdateButton() {
  const btnRef = useRef(null);

  useEffect(() => {
    const button = btnRef.current;

    function updateApp() {
      window.location.href = "https://andreymarikov.github.io/musicentric-v2/" + "?update=" + Date.now();
    }

    button.addEventListener("click", updateApp);

    return () => {
      button.removeEventListener("click", updateApp);
    };
  }, []);

  return <button ref={btnRef} className="update-btn btn btn-menu btn-secondary">Обновить сейчас</button>;
}

export default UpdateButton;
