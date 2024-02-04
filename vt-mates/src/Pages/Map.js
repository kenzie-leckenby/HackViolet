import React from 'react';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
const homePosition = [37.227746, -80.421960];
function Map() {
  return(
      <MapContainer center={homePosition} zoom={14}>
        <TileLayer
          attribution = '&copy; <a href= />'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>


      /* <a href = "https://www.openstreetmap.org/#map=14/37.2303/-80.4086">
      <img src = "vt-mates/Pages/Blacksburg_Map.png" alt = "Map of Blacksburg" width="500" height="600"></img>
      </a> */
  )
}

export default Map;