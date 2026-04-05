import { useNavigate } from "react-router-dom";

function ExitButton() {
  const navigate = useNavigate();

  return <button className="btn btn-cyan btn-menu" onClick={() => navigate(-1)}>Назад</button>
}

export default ExitButton;
