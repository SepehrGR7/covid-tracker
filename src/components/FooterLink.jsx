const FooterLink = ({ url, children }) => {
  return (
    <li>
      <a
        href={`https://${url}/sepehrgr7`}
        target="_blank"
        rel="noreferrer"
        className="mx-4 transition-colors duration-300 hover:text-purple-500"
      >
        {children}
      </a>
    </li>
  )
}

export default FooterLink
