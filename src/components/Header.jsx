import useDarkMode from '../hooks/useDarkMode'

const Header = () => {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <header>
      <div
        className="px-2 py-5 text-center text-white"
        style={{ backgroundColor: '#8739f9' }}
      >
        <div className="container flex justify-between mx-auto lg:grid lg:grid-cols-3">
          <div className="hidden lg:block"></div>
          <div className="flex items-center lg:flex-col">
            <h1 className="text-xl font-semibold md:text-3xl lg:mb-2">
              <i className="mr-1 fas fa-virus fa-lg"></i> Covid-19 Tracker
            </h1>
            <p className="hidden text-sm font-light lg:block lg:text-base">
              API by{' '}
              <a
                href="https://covid19api.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:underline"
              >
                covid19api
              </a>
            </p>
          </div>
          <div className="flex items-center justify-end col-span-1 ">
            <button
              className="flex items-center justify-center w-10 h-10 p-2 transition-colors duration-300 rounded-full md:w-14 md:h-14 hover:bg-purple-700"
              onClick={() => setTheme(colorTheme)}
            >
              <ion-icon
                name={colorTheme === 'light' ? 'sunny' : 'moon'}
                size="large"
              ></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
