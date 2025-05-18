
const SocialLink = ({ href, icon, itemClass }) => {
    return (
        <li>
            <a className={itemClass} href={href} target="_blank" rel="noreferrer">
                <i className={icon}></i>
            </a>
        </li>
    )
}

export default SocialLink;
