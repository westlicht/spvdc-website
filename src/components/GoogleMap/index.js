import React, { PropTypes } from "react"
import { Gmaps, Marker, InfoWindow } from "react-gmaps"

// import styles from "./index.css"

import mapStyles from "./styles.json"

const coords = {
  lat: 47.1846479,
  lng: 7.3993568,
}

class GoogleMap extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  }

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  }

  onMapCreated(map) {
    if (typeof window !== "undefined") {
      window.addEventListener('resize', function() {
        map.setCenter(coords)
      })
    }
  }

  render() {
    return (
      <a className={ this.props.className } href="https://www.google.ch/maps/place/swiss-PVD+Coating+AG/@47.184648,7.3977163,17z/data=!3m1!4b1!4m5!3m4!1s0x478e20ee68f689df:0x6b0770bf8d20eafa!8m2!3d47.184648!4d7.399905" target="_blank">
        <Gmaps { ...this.props }
          // ref={(map) => { this.map = map }}

          width="100%"
          height="100%"
          lat={47.1846479}
          lng={7.3993568}
          zoom={13}
          loadingMessage={'loading Google Maps ...'}
          params={{ key: this.context.metadata.pkg.gmaps.key }}

          disableDefaultUI={true}
          draggable={false}
          scrollwheel={false}
          styles={ mapStyles }

          onMapCreated={this.onMapCreated}
        >
          <Marker
            lat={47.1847479}
            lng={7.3999568}
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
          {/* <InfoWindow
            lat={47.1847479}
            lng={7.3999568}
            content={ "<img width='150' src='/assets/img/logo.svg'>" }
            pixelOffset={{ width: 0, height: -40 }}
            boxStyle={{
              opacity: 0.5
            }}
          /> */}
        </Gmaps>
      </a>
    )
  }
}

export default GoogleMap
