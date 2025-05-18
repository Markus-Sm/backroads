import { socialLinks } from "../data";
import { pageLinks } from "../data";
import PageLinks from "./PageLinks";

const Footer = () => {
    return (
      <footer className="section footer">
        
        <PageLinks parentClass="footer-links" itemClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          const {id, href, icon } = socialLink;
          return (
            <li key={id}>
            <a className="footer-icon" href={href} target="_blank"
              ><i className={icon}></i></a>
          </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
    )
}

export default Footer
