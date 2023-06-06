import { useState } from "react"

import data from "./data/houses.json"
import HouseCard from "./components/houseCard"

function App() {
  const [available, setAvailable] = useState(false)
  const [selectType, setSelectType] = useState("All")
  const [search, setSearch] = useState("")

  const handleCheckbox = () => {
    setAvailable(!available)
  }

  const handleSelect = (e) => {
    setSelectType(e.target.value)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <header>
        <h1>🏠 Find Your Home</h1>
      </header>
      <div className="wrapper">
        <div className="filters">
          <div>
            <label htmlFor="available">Show only available</label>
            <input
              type="checkbox"
              name="available"
              id="available"
              checked={available}
              onChange={handleCheckbox}
            />
          </div>
          <div>
            <select name="selectType" id="selectType" onChange={handleSelect}>
              <option default value="All">
                All
              </option>
              <option value="Flat">Flat</option>
              <option value="House">House</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="cards">
          {data
            .filter((elem) => elem.available || !available)
            .filter((elem) => selectType === "All" || elem.type === selectType)
            .filter(
              (elem) =>
                search === "" ||
                elem.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            )
            .map((item) => (
              <HouseCard key={item.id} house={item} />
            ))}
        </div>
      </div>
    </>
  )
}

export default App
