import { connect } from 'react-redux'
import { setOperation } from '../../redux/modules/puzzle'
import Puzzle from '../../components/Puzzle'

const mapStateToProps = state => state.puzzle

const mapDispatchToProps = dispatch => {
  return {
    onChangeOperation: name => dispatch(setOperation(name))
  }
}

const PuzzleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Puzzle)

export default PuzzleContainer
