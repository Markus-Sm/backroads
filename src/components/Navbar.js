import logo from "../images/logo.svg"
import { socialLinks } from "../data"
import PageLinks from "./PageLinks"

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
  
          <PageLinks parentClass="nav-links" itemClass="nav-link" />
  
          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const {id, href, icon, style} = link;
              return (
                <li key={id}>
                <a href={href} target="_blank" className={style} rel="noreferrer"
                  ><i className={icon}></i>
                  </a>
              </li>
              );
            })}
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
