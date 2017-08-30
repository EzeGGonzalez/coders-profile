import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.FETCH_CODERS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_CODERS_SUCCESS] (state, { coders }) {
    state.fetchingData = false
    state.error = null
    state.coders = { ...coders }
  },

  [types.FETCH_CODERS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  [types.FETCH_CODER_FEEDBACK_REQUEST] (state) {
    state.feedback = {}
    state.fetchingData = true
    state.fetchersLoading.feedback = true
    state.error = null
  },

  [types.FETCH_CODER_FEEDBACK_SUCCESS] (state, { feedback }) {
    state.fetchingData = false
    state.fetchersLoading.feedback = false
    state.error = null
    state.feedback = { ...feedback }
  },

  [types.FETCH_CODER_FEEDBACK_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.fetchersLoading.feedback = false
    state.error = error
  },

  [types.FETCH_CODER_REQUEST] (state) {
    state.coder = {}
    state.fetchingData = true
    state.fetchersLoading.coder = true
    state.error = null
  },

  [types.FETCH_CODER_SUCCESS] (state, { coder }) {
    state.fetchingData = false
    state.fetchersLoading.coder = false
    state.error = null
    state.coder = { ...coder }
  },

  [types.FETCH_CODER_FAILURE] (state, { error }) {
    state.coder = {}
    state.fetchingData = false
    state.fetchersLoading.coder = false
    state.error = error
  },

  [types.ADD_FEEDBACK] (state, { feedback }) {
    Vue.set(state.feedback, feedback.id, feedback)
  },

  [types.TOGGLE_CODER_STATUS] (state, { coder, owner, checked }) {
    const prevSelected = state.coders[coder].selected || {}
    Vue.set(state.coders[coder], 'selected', {...prevSelected, ...{[owner]: checked}})
  },

  updateFeedback (state, feedback) {
    state.feedback = feedback
  },

  [types.FETCH_ALL_FEEDBACKS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_ALL_FEEDBACKS_SUCCESS] (state, { feedbacks }) {
    state.fetchingData = false
    state.error = null
    state.feedbacks = feedbacks
  },

  [types.FETCH_ALL_FEEDBACKS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  }
}
