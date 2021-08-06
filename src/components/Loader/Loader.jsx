import './Loader.css'

const Loader = () => {
  return (
    <div className="absolute transform top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 dark:bg-gray-900">
      <div className="loading-spinner">
        <div className="spinner">
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-center dark:text-white">
        Fetching Data...
      </h1>
    </div>
  )
}

export default Loader
