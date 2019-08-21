
const {combineReducers, createStore} = require('redux')
// actions type
 const UPDATE_USER ='UPDATE_USER'
 const UPDATE_CONTACT = 'UPDATE_CONTACT'

 const DEFAULT_STATE = {user:{}, contacts:[]}

 const merge = (prev, next) => Object.assign({}, prev, next)
// add the empty array
 const contactReducer = (state = [], action) => {
    if (action.type === UPDATE_CONTACT) return [...state, action.payload]
    return state
}
// add the emty state
 const userReducer = (state = {}, action) => {
    if (action.type === UPDATE_USER) return merge (state, action.payload)
    if(action.type === UPDATE_CONTACT) return merge(state, {prevContact:action.payload})

    return state
 }
 /*
 const reducer = (state, action) => ({
    user: userReducer(state.user, action),
    contacts: contactReducer(state.contacts, action)
 })  this is same as below combineReducers    */
const reducer = combineReducers({
    user: userReducer,
    contacts: contactReducer,
})
// action creators
 const updateUser = update => ({
    type: UPDATE_USER,
    payload: update,
 })

 const addContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
 })

const store = createStore(reducer, DEFAULT_STATE)

store.dispatch(updateUser({foo:'foo'}))
store.dispatch(updateUser({bar:'bar'}))
store.dispatch(updateUser({foo:'baz'}))

store.dispatch(addContact({name:'shahid', number:'031242022873'}))
store.dispatch(addContact({name:'shahid', number:'031242022873'}))
store.dispatch(addContact({name:'ali', number:'03114567897'}))
console.log(store.getState())
