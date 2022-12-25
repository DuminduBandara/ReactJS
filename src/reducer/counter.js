const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            if(state < 10){
                return state + 1 * action.payload;
            }else{
                alert("out of range");
                return state * action.payload;
            }
        case 'DECREMENT':
            if(state > 0){
                return state - 1;
            }else{
                alert("out of range");
                return state = 0;
            }
        default:
            return state;
    }
}



export default counterReducer;