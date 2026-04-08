import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Выберите октаву</h1>
      <span className='center' id='menu-btns'>
        <Link to={{
          pathname: '/mode-selection',
        }} className="btn btn-green btn-menu">Первая октава 𝄞</Link>
        <Link to={{
          pathname: '/mode-selection',
          search: '?octave=two-line',
        }} className="btn btn-orange btn-menu">Вторая октава 𝄞</Link>
        <Link to={{
          pathname: '/mode-selection',
          search: '?octave=small',
        }} className="btn btn-blue btn-menu">Малая октава 𝄢</Link>
        <Link to={{
          pathname: '/mode-selection',
          search: '?octave=great',
        }} className="btn btn-red btn-menu">Большая октава 𝄢</Link>
      </span>
    </>
  );
}
