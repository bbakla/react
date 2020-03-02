import {createStore} from "redux";
import {ShopReducer} from "./ShopReducer";
import {CommonReducer} from "./CommonReducer";
import {CartReducer} from "./CardReducer";

export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer));

