import { DEPOSIT, DRAW } from "./action";

const initialState = {
    amount: 0
};
const rootReducer = (state = initialState, action) => {
    // Handle các actions gửi lên
    console.log(state);
    switch (action.type) {
        case DEPOSIT:
            return { ...state, amount: state.amount + action.payload };
        case DRAW:
            return { ...state, amount: state.amount - action.payload };
        default:
            return state;
    }
};

export default rootReducer;
