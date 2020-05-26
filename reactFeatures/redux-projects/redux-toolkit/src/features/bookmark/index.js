import {combineReducers} from 'redux';

import bookmarkSliceR from '../bookmark/bookmarkSlice';

const bookmarkRootReducer = combineReducers({
    bookmarks: bookmarkSliceR
})

export default bookmarkRootReducer
