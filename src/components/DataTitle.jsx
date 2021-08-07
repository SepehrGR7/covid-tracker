import { DateTime } from 'luxon'

const DataTitle = ({ title, dataDate }) => {
  const timestamp = DateTime.fromISO(dataDate.slice(0, 19)).toFormat('MMMM dd y, t')

  return (
    <div className="mb-8 text-center dark:text-white">
      <h1 className="px-2 mb-3 text-3xl font-semibold">
        {title.Country ? title.Country : title}
      </h1>
      <h1 className="text-xl font-light">{timestamp}</h1>
    </div>
  )
}

export default DataTitle
