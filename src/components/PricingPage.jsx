import { Link } from "react-router-dom";
import Bg from "../assets/pricing-bg.jpg";

function Pricing() {
  return (
    <>
      <style>
        {`
          h1 {
            position: static;
            margin: 0;
            overflow-wrap: break-word;
            hyphens: auto;
            z-index: 1000;
          }
          

          #root,
          body {
            background-color: hsl(0, 0%, 90%) !important;
            justify-content: start;
            display: block;
            z-index: 0;
          }
          
          #root {
            padding: 32px;
          }

          body {
            overflow-y: auto;
            align-items: start !important;
          }

          .bi {
            font-size: 38px;
          }

          .bi-check {
            color: hsl(100, 80%, 65%);
          }

          .bi-x {
            color: rgb(190, 190, 190);
          }

          #root {
            min-width: auto;
          }

          .card span {
            display: flex;
            align-items: center;
            padding-inline: 12px;
            padding-bottom: 0;
            z-index: 100;
            background-color: var(--white);
          }

          .card {
            background-color: var(--white);
            display: flex;
            flex-direction: column;
            border-radius: 32px;
            margin-top: 8px;
            width: 100%;
            font-size: 24px;
            border: none;
            position: relative;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }

          .card.free {
            outline: 3px solid gray;
            z-index: 2;
          }

          .card.premium::after {
            content: "";
            position: absolute;
            top: -4px;
            left: -4px;
            width: calc(100% + 8px);
            height: calc(100% + 8px);
            border-radius: 36px;
            background-image: linear-gradient(to left, magenta, #a903fc);
            z-index: 3;
          }

          .card.premium .title {
            background-image: linear-gradient(to left, magenta, #a903fc);
          }

          .card.premium {
            -webkit-box-shadow:0px 0px 105px 45px rgba(255,0,255,0.2);
            -moz-box-shadow: 0px 0px 105px 45px rgba(255,0,255,0.2);
            box-shadow: 0px 0px 105px 45px rgba(255,0,255,0.2);
          }

          .card.premium .title .btn {
            box-shadow: 0 6px 0 hsl(0, 0%, 90%);
          }

          .card .title {
            background: gray;
            margin: 0;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            padding: 16px;
            color: var(--white);
            padding-block: 24px;
            text-align: left;
            padding-inline: 32px;
            z-index: 100;
            display: flex;
            flex-direction: column;
            align-items: start;
            padding-top: 16px;
          }

          h2 {
            font-size: 20px;
            color: var(--white);
          }

          .price {
            font-size: 16px !important;
            color: hsl(0, 0%, 80%);
            margin-bottom: 8px;
          }

          .price b {
            font-size: 42px;
            font-weight: 500;
            color: var(--white);
          }
          
          #root>span>p {
            margin-block: 32px;
            font-size: 16px;
            margin-bottom: 26px;
          }

          #root>span {
            position: relative;
          }

          .bg {
            width: 200%;
            position: absolute;
            top: -100px;
            left: -32px;
            filter: blur(2px) brightness(80%);
            z-index: -1;
            width: calc(100% + 64px);
            transform: scale(1.1);
            max-height: 450px;
            min-height: 450px;
            -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
          }

          .card span p {
            font-size: 20px;
            margin-right: 12px;
            text-align: left;
          }

          .card span:nth-child(2) {
            padding-top: 12px;
          }

          .card span:last-child {
            padding-bottom: 12px;
            border-bottom-left-radius: 32px;
            border-bottom-right-radius: 32px;
          }

          .free span {
            background-color: hsl(0, 0%, 90%);
          }

          .highlighted-text {
            color: transparent;
            background-image: linear-gradient(to right, magenta, hsl(308, 100%, 81%));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .card.free {
            transform: scale(0.93);
          }

          .card.free {
            margin-top: 0;
          }

          .card .title .btn {
            max-width: 100% !important;
            text-align: center;
            background-color: hsl(0, 0%, 90%);
            color: hsl(0, 0%, 40%);
            box-shadow: 0 6px 0 hsl(0, 0%, 85%);
            margin-bottom: 6px;
            font-size: 20px;
          }

          .card .title .btn:active {
            margin-top: 6px;
            margin-bottom: 0;
            box-shadow: none;
          }

          .benefit {
            font-size: 18px !important;
            color: hsl(0, 0%, 80%);
            margin-bottom: 18px;
          }

          .premium .btn {
            background-clip: text;
            color: transparent !important;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            background-image: linear-gradient(to left, #fc03c6, #3103fc);
          }

          .premium .btn::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--white);
            border-radius: 30px;
            z-index: -1;
          }

          .premium .title p {
            color: hsl(0, 0%, 90%);
          }
        `}
      </style>
      <span>
        <img className="bg" src={Bg}></img>
        <h1 style={{ color: "var(--white)" }}>Освойте ноты всех октав фортепиано.</h1>
        <p style={{ color: "var(--white)" }}>Изучите первую октаву <b>бесплатно</b>. С <b className="highlighted-text">Premium</b>-подпиской вы освоите четыре октавы.</p>
      </span>
      <span className="card free">
        <span className="title">
        <h2>Бесплатно</h2>
        <p className="price"><b>$0</b> / месяц</p>
        <p className="benefit">Начните тренироваться в сфокусированном диапазоне. <b style={{ color: "hsl(0, 0%, 90%)", fontWeight: "500" }}>Бесплатно навсегда.</b></p>
        <Link className="btn btn-menu btn-red" to="/">Начать</Link>
        </span>
        <span>
          <i className="bi bi-check"></i>
          <p>Все виды нот</p>
        </span>
        <span>
          <i className="bi bi-check"></i>
          <p>Первая октава</p>
        </span>
        <span>
          <i className="bi bi-x"></i>
          <p>Вторая октава</p>
        </span>
        <span>
          <i className="bi bi-x"></i>
          <p>Малая октава</p>
        </span>
        <span>
          <i className="bi bi-x"></i>
          <p>Большая октава</p>
        </span><span>
          <i className="bi bi-x"></i>
          <p>Продвинутая практика</p>
        </span>
      </span>
      <span className="card premium">
        <span className="title">
        <h2>Premium</h2>
        <p className="price"><b>$X</b> / месяц</p>
        <p className="benefit">Раскройте весь диапазон мастерства владения нотами.</p>
        <Link className="btn btn-menu btn-red highlighted-text" to="/">Обновить до <b style={{ fontWeight: "bold" }}>Premium</b></Link>
        </span>
        <span>
          <i className="bi bi-check"></i>
          <p>Все виды нот</p>
        </span>
        <span>
          <i className="bi bi-check"></i>
          <p>Первая октава</p>
        </span>
        <span>
          <i className="bi bi-check"></i>
          <p>Вторая октава</p>
        </span>
        <span>
          <i className="bi bi-check"></i>
          <p>Малая октава</p>
        </span>
        <span>
          <i className="bi bi-check"></i>
          <p>Большая октава</p>
        </span><span>
          <i className="bi bi-check"></i>
          <p>Продвинутая практика</p>
        </span>
      </span>
    </>
  );
}

export default Pricing;
