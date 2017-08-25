import { db } from './firebase'

const codersRef = db.ref('/coders')
const feedbacksRef = db.ref('/feedbacks')

export default {
  getCoders () {
    const query = codersRef.orderByChild('fullname')
    return query.once('value')
  },

  getCoderFeedback (coder, owner) {
    const query = feedbacksRef.child(coder).child(owner).orderByChild('id').limitToFirst(1)
    return query.once('value')
  },

  getCoder (coder) {
    const query = codersRef.child(coder)
    return query.once('value')
  },

  postFeedback (coder, owner, feedback) {
    const newFeedRef = feedbacksRef.child(`${coder}/${owner}`)
    const id = feedback.id || newFeedRef.push().key

    const feed = {
      id,
      ...feedback
    }

    return newFeedRef.child(id)
      .set(feed)
      .then(() => feed)
  },

  toogleCoderStatus (coder, owner) {
    const toogleRef = codersRef.child(`${coder}/selected/${owner}`)

    return toogleRef.orderByKey().once('value')
      .then(function (s) {
        toogleRef.set(!(s.val() || false))
        return s.val() || false
      })
  }
}
