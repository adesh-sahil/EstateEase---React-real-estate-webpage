import SearchBar from '../../componants/SearchBar/SearchBar'
import './homePage.scss'
const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className='title'>
            Find Real Estate with <span>Estate Ease</span> & get your dream place!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe asperiores ex, obcaecati quisquam nihil repellendus, deleniti id sit dolorem optio, at est ad enim dolorum nisi provident veritatis autem voluptates.
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
              <h2>12+</h2>
              <h3>Years of experience</h3>
            </div>
            <div className="box">
              <h2>200</h2>
              <h3>Award gained</h3>
            </div>
            <div className="box">
              <h2>1200+</h2>
              <h3>Property ready</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage
