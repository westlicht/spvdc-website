import { connect } from "react-redux"
import { setApplication, setMaterial } from "../../redux/modules/coatings"
import CoatingFinder from "../../components/CoatingFinder"

const mapStateToProps = state => state.coatings

const mapDispatchToProps = dispatch => {
  return {
    onChangeApplication: value => dispatch(setApplication(value)),
    onChangeMaterial: value => dispatch(setMaterial(value)),
  }
}

const CoatingFinderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoatingFinder)

export default CoatingFinderContainer
