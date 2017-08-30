import { db } from './firebase'

const codersRef = db.ref('/coders')
const feedbacksRef = db.ref('/feedbacks')
const usersRef = db.ref('/users')

feedbacksRef.on('value', function () {})

console.log()

export default {
  getCoders () {
    const query = codersRef.orderByChild('fullname')
    return query.once('value')
  },

  getCoderFeedback (coder, owner) {
    const query = feedbacksRef.child(coder).child(owner).orderByChild('id').limitToFirst(1)
    return query.once('value')
  },

  getFeedbacks () {
    return feedbacksRef.once('value').then(snap => snap.val())
  },

  // async getFeedbacks () {
  //   let feedbacks = []
  //   let owners = []
  //
  //   let feeds = await feedbacksRef.once('value').then(snap => snap.val())
  //
  //   for (let coderId in feeds) {
  //     let coder = await codersRef.child(coderId).once('value').then(snap => snap.val())
  //
  //     for (let ownerId in feeds[coderId]) {
  //       owners[ownerId] = owners[ownerId] || await usersRef.child(ownerId).once('value').then(snap => snap.val())
  //
  //       feedbacks.push({ ...feeds[coderId][ownerId], ...{ coder, owner: { id: ownerId, ...owners[ownerId] } } })
  //     }
  //   }
  //
  //   return feedbacks
  // },

  getCoder (coder) {
    const query = codersRef.child(coder)
    return query.once('value')
  },

  getCompany (id) {
    const query = usersRef.child(id)
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
