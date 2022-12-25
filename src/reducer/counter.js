const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1 * action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}



export default counterReducer;