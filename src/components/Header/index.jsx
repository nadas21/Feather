import "./index.css";
import Logo from "../../assets/Landie.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <nav className="header-nav">
            <ul className="header-list">
              <li className="header-item">
                <a href="#" className="header-item-link">
                  Home
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  About
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <a href="#" className="logo-link">
            <img
              src={Logo}
              alt="logo"
              className="logo"
              width={79}
              height={30}
            />
          </a>

          <button className="header-btn">Buy Now</button>
        </div>
      </div>
    </header>
  );
};
