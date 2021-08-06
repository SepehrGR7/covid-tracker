import FooterLink from './FooterLink'

const Footer = () => {
  return (
    <div className="bottom-0 p-4 pb-2 text-center text-black text-opacity-50 md:fixed md:left-0 md:right-0 dark:text-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <p className="mb-2 font-light text-md md:m-0">
          Coded by{' '}
          <a
            href="https://github.com/sepehrgr7"
            className="font-semibold transition-colors duration-300 hover:text-purple-500"
          >
            SepehrGr
          </a>{' '}
        </p>
        <ul className="flex">
          <FooterLink url="instagram.com">
            <i className="fab fa-instagram fa-2x"></i>
          </FooterLink>
          <FooterLink url="github.com">
            <i className="fab fa-github fa-2x"></i>
          </FooterLink>
          <FooterLink url="t.me">
            <i className="fab fa-telegram fa-2x"></i>
          </FooterLink>
        </ul>
      </div>
    </div>
  )
}

export default Footer
