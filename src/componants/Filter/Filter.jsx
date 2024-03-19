import "./Filter.scss";

function Filter() {
  return (
    <div className="Filter">
        <h1>Search results for <b>Delhi</b></h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input 
                    type="text" 
                    id = "city" 
                    name = "city" 
                    placeholder="city location"
                />
            </div>
        </div>
        <div className="bottom">
            <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value="">any</option>
                    <option value="1">Buy</option>
                    <option value="2">Rent</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="property">Property</label>
                <select name="property" id="property">
                    <option value="">any</option>
                    <option value="apartment">Apartment/Condo</option>
                    <option value="House">House</option>
                    <option value="Duplex">Duplex</option>
                    <option value="vacation home">Vacation Home</option>
                    <option value="land">Land</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <input 
                    type="text" 
                    id = "minPrice" 
                    name = "minPrice" 
                    placeholder="Enter your min. budget"
                />
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <input 
                    type="text" 
                    id = "maxPrice" 
                    name = "maxPrice"
                    placeholder="Enter your max. budget"
                />
            </div>
            <div className="item">
                <label htmlFor="bedroom">Bedroom</label>
                <input 
                    type="text" 
                    id = "bedroom" 
                    name = "bedroom" 
                    placeholder="any"
                />
            </div>
            <button>
                <img src="/search.png" alt="" />
            </button>
        </div>
    </div>
  )
}

export default Filter;
