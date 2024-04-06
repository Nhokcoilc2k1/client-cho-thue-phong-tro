import authReducer from "./authReducer";
import userReducer from "./userReducer";
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel12 from "redux-persist/es/stateReconciler/autoMergeLevel2"
