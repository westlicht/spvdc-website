import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import PageWrapper from "../PageWrapper"
import Banner from "../../components/Banner"
import Section from "../../components/Section"
// import GoogleMap from "../../components/GoogleMap2"
// import GoogleMap from "../../components/GoogleMap3"
// import GoogleMap from "google-map-react"
import TeamList from "../../components/TeamList"
import { Gmaps, InfoWindow } from "react-gmaps"

import ContactData from "../../data/ContactData"

import styles from "./index.css"

const Contact = (props, context) => {

  const address = ContactData.address(context.locale).join("<br>")

  return (
    <PageWrapper { ...props }>
      <Banner image="/assets/img/banner/contact.jpg" />
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        <TeamList members={ ContactData.members(context.locale) } />
      </Section>
      <div className={ styles.map }>
        <Gmaps
          width="100%"
          height="100%"
          lat={47.1846479}
          lng={7.3993568}
          zoom={14}
          // zoomControl={false}
          mapTypeControl={false}
          loadingMessage={'Be happy'}
          params={{key: 'AIzaSyBYyj0vwPlxPakSIxBHMKkLUtrJpg1TF2s'}}

          disableDefaultUI={true}
          draggable={false}
          scrollwheel={false}
          // styles={require("../../components/GoogleMap/styles.json")}
        >
          {/* <Marker
            lat={47.1847479}
            lng={7.3999568}
            draggable={false}
            // onDragEnd={this.onDragEnd}
          /> */}
          <InfoWindow
            lat={47.1847479}
            lng={7.3999568}
            content={ address }
          />
        </Gmaps>
      </div>
    </PageWrapper>
  )
}

Contact.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

Contact.contextTypes = {
  locale: PropTypes.string,
}

export default Contact
