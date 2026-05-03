import { useNavigate, useSearchParams } from "react-router-dom";

function ExitButton() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const language = searchParams.get("lang");

  return <button className="btn btn-cyan btn-menu" onClick={() => {
    navigate(-1);
  }} style={{ cursor: "pointer" }}>{language == "russian" ? "Назад" : "Back"}</button>
}

export default ExitButton;
