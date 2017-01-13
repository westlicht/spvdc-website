import { connect } from "react-redux"
import { setApplication, setMaterial } from "../../redux/modules/coatings"
import CoatingFinder from "../../components/CoatingFinder"

const mapStateToProps = state => state.coatings

const mapDispatchToProps = dispatch => {
  return {
    onChangeApplication: id => dispatch(setApplication(id)),
    onChangeMaterial: id => dispatch(setMaterial(id)),
  }
}

const CoatingFinderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoatingFinder)

export default CoatingFinderContainer
