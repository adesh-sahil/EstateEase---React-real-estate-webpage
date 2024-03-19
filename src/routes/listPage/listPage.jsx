import Filter from "../../componants/Filter/Filter";
import Card from "../../componants/Card/card";
import Map from "../../componants/map/map"
import { listData } from "../../lib/dummydata";
import "./listPage.scss";

export default function listPage() {

  const data = listData
  return (
    <div className="listPage">
        <div className="listContainer">
            <div className="wrapper">
                <Filter/>
                {data.map(item => (
                    <Card key = {item.id} item = {item}/>
                ))}
            </div>
        </div>
        <div className="mapContainer">
          <Map items={data}/>
        </div>
    </div>
  )
}
