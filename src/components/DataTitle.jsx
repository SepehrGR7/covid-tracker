import { DateTime } from 'luxon'

const DataTitle = ({ title, dataDate }) => {
  const timestamp = DateTime.fromISO(dataDate.slice(0, 19)).toFormat('MMMM dd y, t')

  return (
    <div className="text-center mb-8 dark:text-white">
      <h1 className="text-3xl font-semibold mb-3">
        {title.Country ? title.Country : title}
      </h1>
      <h1 className="text-xl font-light">{timestamp}</h1>
    </div>
  )
}

export default DataTitle
