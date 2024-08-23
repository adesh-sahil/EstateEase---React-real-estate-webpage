import { useContext } from 'react'
import SearchBar from '../../componants/SearchBar/SearchBar'
import { AuthContext } from '../../context/AuthContext'
import './homePage.scss'
const HomePage = () => {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);
  return (
    <div className='homePage'>
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className='title'>
            Find Real Estate with <span>Estate Ease</span> & get your dream place!
          </h1>
          <p>
          Unlock the door to your dream home with Estate Ease! From charming apartments to lavish estates, we make finding your perfect place easy, fun, and stress-free. Start your adventure with us and discover the home that suits your style—no compromises!
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
    </div>
  )
}

export default HomePage
