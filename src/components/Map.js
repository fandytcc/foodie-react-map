import React, { PureComponent } from 'react'
import { compose, withProps } from 'recompose'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const amsterdam = { lat: 52.370, lng: 4.895 }
// arrays of lat-lng of restaurants stored in database..
// const markers = this.props.markers.map((restaurant, i) => {
//   const marker = [
//     {
//       position: {
//       lat: restaurant.location.lat,
//       lng: restaurant.location.lng
//       }
//     }
//   ]
//
//   return <Marker key={i} {...marker} />
// })

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height:`200px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: amsterdam,
  }),
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={props.center}
    defaultOption={{streetViewControl: false, mapTypeControl: false}}
  >
    {props.isMarkerShown && <Marker position={props.center}/>}
  </GoogleMap>
)

class Map extends PureComponent {
  state = {
    isMarkerShown: false,
    center: "",
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <div>
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>
    )
  }
}
export default Map
