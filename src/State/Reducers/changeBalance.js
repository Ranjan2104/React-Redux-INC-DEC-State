const initialState = {
    bal: 0
}
const changeNumber = (state = initialState, action) => {
    if(action.type === 'INCREMENT') {
        return {
            ...state,
            bal: state.bal + action.payload
        }
    }
    else if(action.type === 'DECREMENT') {
        return {
            ...state,
            bal: state.bal - action.payload
        }
    }
    else if(action.type === 'RESET') {
        return {
            ...state,
            bal: action.payload
        }
    }
    return state;
}

export default changeNumber