import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {Usersreducer} from "./UsersReducer";


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   users: Usersreducer
});
let store = createStore(reducers);

// export type StoreType = typeof store
export type StateType = ReturnType<typeof reducers>
export default store;