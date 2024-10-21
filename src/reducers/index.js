import { combineReducers} from "redux"
import loginReducer from "./login";
import cartReducer from "./cart";

const allReducer = combineReducers({
    loginReducer,
    cartReducer
    // Thêm nhiều reducer ở đây
})

export default allReducer;