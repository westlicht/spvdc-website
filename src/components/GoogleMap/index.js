import React from "react"
import PropTypes from "prop-types"
import { Gmaps, Marker } from "react-gmaps"

import mapStyles from "./styles.json"

class GoogleMap extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number,
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  }

  onMapCreated(map) {
    if (typeof window !== "undefined") {
      window.addEventListener('resize', function() {
        map.setCenter({ lat: this.props.lat, lng: this.props.lng })
      }.bind(this))
    }
  }

  render() {
    return (
      <a className={ this.props.className } href={ this.props.url } target="_blank">
        <Gmaps { ...this.props }
          loadingMessage={'Google Maps'}
          params={{ key: this.context.metadata.pkg.config.googleMaps.key }}

          disableDefaultUI={true}
          draggable={false}
          scrollwheel={false}
          styles={ mapStyles }

          onMapCreated={ this.onMapCreated.bind(this) }
        >
          <Marker
            lat={ this.props.lat }
            lng={ this.props.lng }
            icon={{
              url: "/assets/icons/home.svg",
              scaledSize: {
                width: 32,
                height: 32,
              },
              size: {
                width: 32,
                height: 32,
              }
            }}
          />
        </Gmaps>
      </a>
    )
  }
}

export default GoogleMap
