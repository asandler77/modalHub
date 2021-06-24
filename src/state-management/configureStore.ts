import { createStore, combineReducers } from 'redux';
import countReducer from "./reducer/reducer";
const rootReducer = combineReducers(
    { isModalVisible: countReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;
