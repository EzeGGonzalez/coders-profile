import * as types from './mutation-types'
import API from '@/api'

export default {
  fetchCoders ({ commit }) {
    commit(types.FETCH_CODERS_REQUEST)

    API.getCoders()
      .then(snap => commit(types.FETCH_CODERS_SUCCESS, { coders: snap.val() }))
      .catch(error => commit(types.FETCH_CODERS_FAILURE, { error }))
  },

  fetchFeedback ({ commit }, { coder, owner }) {
    commit(types.FETCH_CODER_FEEDBACK_REQUEST)

    API.getCoderFeedback(coder, owner)
      .then(snap => {
        var feed = {}
        snap.forEach(s => (feed = s.val()))
        return commit(types.FETCH_CODER_FEEDBACK_SUCCESS, { feedback: feed })
      })
      .catch(error => commit(types.FETCH_CODER_FEEDBACK_FAILURE, { error }))
  },

  fetchAllFeedbacks ({ commit }) {
    commit(types.FETCH_ALL_FEEDBACKS_REQUEST)

    API.getFeedbacks()
      .then(feedbacks => commit(types.FETCH_ALL_FEEDBACKS_SUCCESS, { feedbacks }))
      .catch(error => commit(types.FETCH_ALL_FEEDBACKS_FAILURE, { error }))
  },

  fetchCoder ({ commit }, { coder }) {
    commit(types.FETCH_CODER_REQUEST)

    API.getCoder(coder)
      .then(snap => commit(types.FETCH_CODER_SUCCESS, { coder: snap.val() }))
      .catch(error => commit(types.FETCH_CODER_FAILURE, { error }))
  },

  addFeedback ({ commit }, { coder, owner, feedback }) {
    API.postFeedback(coder, owner, feedback)
      .then(feedback => commit(types.ADD_FEEDBACK, { feedback }))
  },

  toogleCoderStatus ({ commit }, { coder, owner }) {
    API.toogleCoderStatus(coder, owner)
      .then(checked => commit(types.TOGGLE_CODER_STATUS, { coder, owner, checked: !checked }))
  }
}
