const SocialLink = ({ icon, href, style }) => {
    return (
      <li key={id}>
        <a href={href} target="_blank" className={style} rel="noreferrer"
          ><i className={icon}></i>
          </a>
      </li>
    )
}

export default SocialLink;
