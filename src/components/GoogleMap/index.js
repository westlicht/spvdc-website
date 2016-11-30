import React from "react"
// import React, { PropTypes } from "react"

// import styles from "./index.css"

const GoogleMap = () => {
  const url = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ34n2aO4gjkcR-uogjb9wB2s"
  const key = "AIzaSyBYyj0vwPlxPakSIxBHMKkLUtrJpg1TF2s"
  return (
    <iframe
      width="600"
      height="450"
      frameBorder="0"
      // style="border:0"
      src={ url + "&key=" + key }
      allowFullScreen>
    </iframe>
  )
}

GoogleMap.propTypes = {
  // image: PropTypes.string.isRequired,
}

export default GoogleMap
