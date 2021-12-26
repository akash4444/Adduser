import {
    createStore
} from 'redux'

const userReducer = (state = {}, action) => {
    const {
        value,
        type
    } = action;
    switch (type) {
        case 'UPDATE_USERS':
            return {
                ...state, users: {
                    ...value
                }
            }
            case 'counter/decremented':
                return {
                    value: state.value - 1
                }
                default:
                    return state
    }
}

const store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;