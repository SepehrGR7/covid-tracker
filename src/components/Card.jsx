const Card = ({ title, icon, newData, total }) => {
  return (
    <div
      className="mb-2 text-center text-white rounded-md shadow-lg py-7 md:py-12"
      style={{ backgroundColor: '#8739f9' }}
    >
      <h1 className="mb-5 text-2xl font-semibold lg:text-3xl">
        <i className={`fas fa-${icon} mr-2`}></i>
        {title}
      </h1>
      <div className="text-lg">
        <p className="mt-3">
          <span className="font-semibold">New:</span> {newData.toLocaleString()}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Total:</span> {total.toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default Card
