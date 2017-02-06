import { connect } from "react-redux"
import { setFilter } from "../../redux/modules/coatings"
import CoatingFinder from "../../components/CoatingFinder"

const mapStateToProps = state => state.coatings

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: (filterId, itemId) => dispatch(setFilter(filterId, itemId)),
  }
}

const CoatingFinderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoatingFinder)

export default CoatingFinderContainer
