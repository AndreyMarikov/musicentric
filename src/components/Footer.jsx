import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <style>
        {`
          footer {
            border-top: 3px solid hsl(0, 0%, 85%);
            width: 100%;
            height: 64px;
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-inline: 100px;
          }

          footer i {
            font-size: 36px;
          }
        `}
      </style>
      <footer>
        <Link>
          <i className="bi bi-house-fill"></i>
        </Link>
        <Link>
          <i className="bi bi-trophy-fill"></i>
        </Link>
      </footer>
    </>
  );
}

export default Footer;
