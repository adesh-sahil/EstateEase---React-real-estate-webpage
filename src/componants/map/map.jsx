import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css"
import Pin from "../pin/Pin";

function map({items}) {
  return (
    // <MapContainer center={[28.6484,77.0960]} zoom={13} scrollWheelZoom={false} className="map">
    <MapContainer center={[28.631080,77.218310]} zoom={9} scrollWheelZoom={false} className="map">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
        <Pin item = {item} key = {item.id}/>
    ))}
  </MapContainer>
  )
}

export default map;