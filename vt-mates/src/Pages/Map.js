import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
const homePosition = [37.227746, -80.421960];
function Map() {
  return(
    <div>
      <a href = "https://www.openstreetmap.org/#map=14/37.2303/-80.4086">
      <img src = "vt-mates/Pages/Blacksburg_Map.png" alt = "Map of Blacksburg" width="500" height="600"></img>
      </a>
    </div>
  )
}

export default Map;