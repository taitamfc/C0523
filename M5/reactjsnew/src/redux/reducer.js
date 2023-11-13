import { FETCH_USER_SUCCESS } from "./action";

const initialState = {
    users: [],
};
const rootReducer = (state = initialState, action) => {
    // Handle các actions gửi lên
    console.log(state);
    switch (action.type) {
        case FETCH_USER_SUCCESS:
                return { ...state, users: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
