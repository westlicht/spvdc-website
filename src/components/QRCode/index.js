import React from "react"

import QRCodeBase from "qrcode.react"

class QRCode extends QRCodeBase {

  render() {
    return (
      <canvas
        height={this.props.size}
        width={this.props.size}
        ref="canvas"
      />
    )
  }
}

export default QRCode
