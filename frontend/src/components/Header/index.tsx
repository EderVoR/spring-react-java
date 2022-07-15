import logo from "../../assets/img/image-logo.svg";
import './styles.css'

function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://www.instagram.com/eder.edy">@eder.edy</a>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
