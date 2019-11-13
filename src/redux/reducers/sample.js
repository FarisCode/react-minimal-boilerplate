import { actions } from "../actions/sample"

const initialState = {
  sampleData: []
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case actions.SAMPLE_ACTION:
      return { ...state, sampleData: { ...data } }
    default:
      return state
  }
}
