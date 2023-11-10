import { createStore } from "redux";
import rootReducer from "./reducer";
import { applyMiddleware } from "redux";
import { DEPOSIT } from "./action";

// Tạo middleware myMiddleware
const myMiddleware = (store) => (next) => (action) => {
    console.log("action", action);
    if( action.type == DEPOSIT )
    {
        action.payload = action.payload + 5;
    }
    next(action);
};

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(myMiddleware));

export default store;