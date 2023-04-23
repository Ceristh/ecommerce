import { Store } from "redux";
import rootReducer from "./reducers";

const store = Store(rootReducer);

export default store;
