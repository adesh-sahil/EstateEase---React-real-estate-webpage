import "./singlePage.scss";
import Slider from "../../componants/slider/slider";
import Map from "../../componants/map/map";
import { singlePostData, userData } from "../../lib/dummydata";
function singlePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images = {singlePostData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  ₹{singlePostData.price}
                </div>
              </div>
              <div className="user">
                <img src="/user.png" alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <p>80sqft</p>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <p>2 bedroom</p>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <p>1 bathroom</p>
            </div>
          </div>
          <p className="title">Nearby places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>500m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="bus.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>200m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>800m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items = {[singlePostData]}/>
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default singlePage;