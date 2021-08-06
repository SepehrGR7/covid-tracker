import Card from './Card'

const Cards = ({ data }) => {
  const covData = data.Global ? data.Global : data

  return (
    <div className="grid gap-3 px-5 md:grid-cols-2 md:px-10 md:gap-10">
      <Card
        title="Cases"
        icon="viruses"
        newData={covData.NewConfirmed}
        total={covData.TotalConfirmed}
      />
      <Card
        title="Deaths"
        icon="skull"
        newData={covData.NewDeaths}
        total={covData.TotalDeaths}
      />
    </div>
  )
}

export default Cards
