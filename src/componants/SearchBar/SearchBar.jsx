import { useState } from "react"
import "./SearchBar.scss"

const types = ["Buy", "Rent"]

export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0
  });

  const switchType = (val) => {
    setQuery((prev) => ({...prev, type: val}));
  };
  
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button key = {type} onClick={() => switchType(type)}
          className={query.type===type ? "active": ""}>  {type}
          </button>
        ))}
        {/* <button onClick={() => switchType("Rent")}>Rent</button> */}
      </div>
      <form action="">
        <input type="text" name="place" placeholder="city location"/>
        <input type="number" name="minPrice" 
        min={0}
        max={10000000}
        placeholder="Min Price"/>
        <input type="number" name="maxPrice" 
        min={0}
        max={10000000}
        placeholder="Max Price"/>
        <button className="search">
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}
