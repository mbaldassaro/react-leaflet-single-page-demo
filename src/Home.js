import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker, Circle, FeatureGroup, LayerGroup, LayersControl, Rectangle } from 'react-leaflet'
const { BaseLayer, Overlay } = LayersControl

class Home extends Component {
render() {
  const center = [24.0, 92]
  const rectangle = [[24.5, 91.5], [25.5, 92.5]]

    return (
      <Map style={{height: "100vh"}}
          center={center} zoom={10}>
        <LayersControl position="topright">

          <BaseLayer checked name="Road">
            <TileLayer
              url="http://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}"
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
          </BaseLayer>

          <BaseLayer name="Terrain">
            <TileLayer
              url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
          </BaseLayer>

          <BaseLayer name="Satellite">
            <TileLayer
              url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
          </BaseLayer>

          <Overlay name="Marker with popup">
            <Marker position={center}>
              <Popup>
                <span>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </span>
              </Popup>
            </Marker>
          </Overlay>

          <Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle center={center} fillColor="blue" radius={200} />
              <Circle
                center={center}
                fillColor="red"
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  color="green"
                  fillColor="green"
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>

          </Overlay>
          <Overlay name="Feature group">
            <FeatureGroup color="purple">
              <Popup>
                <span>Popup in FeatureGroup</span>
              </Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </Overlay>
        </LayersControl>
      </Map>
    )
  }
}

export default Home;
