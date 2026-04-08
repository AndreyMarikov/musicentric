import { Link } from 'react-router-dom';

export default function NotFoundPage() {

  return (
    <>
      <span style={{ position: "fixed", top: 32 + 8 + "px", display: "flex", alignItems: "center", flexDirection: "column", }}>
        <h1 style={{ position: "static", margin: 0 }}>Ошибка 404</h1>
        <h2>Страница не найдена</h2>
      </span>
      <Link to='/' className='btn btn-orange' style={{ position: "fixed", bottom: 32 + 8 + "px", width: 240 + "px" }}>Вернуться в меню</Link>
    </>
  );
}
