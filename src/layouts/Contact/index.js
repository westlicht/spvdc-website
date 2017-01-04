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

import styles from "./index.css"

const contact = require("../../../content/contact/data.yml")

const Contact = (props, context) => {

  const members = contact.members.map(item => ({
    name: item.firstName + " " + item.lastName,
    title: item.title[context.locale],
    tel: item.tel,
    email: item.email,
    vcard: "/assets/" + context.locale + "/contact/" + item.firstName.toLowerCase() + "-" + item.lastName.toLowerCase() + ".vcf",
  }))

  return (
    <PageWrapper { ...props }>
      <Banner image="/assets/img/banner/contact.jpg" />
      <Section>
        <BodyContainer>{ props.body }</BodyContainer>
        <TeamList members={ members } />
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
            content="
              <b>swiss-PVD-Coating AG</b><br>
              Archstrasse 26<br>
              2540 Grenchen<br>
              Schweiz
            "
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
