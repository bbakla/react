import {createSlice} from "@reduxjs/toolkit";

let id = 1;

export const bookmarkSlice = createSlice({
    name: "bookmarkSlice",
    initialState: [],
    reducers: {
        add(state, action) {
            const {payload} = action;

            state.push({
                id: id++,
                name: payload.name,
                url: payload.url,
                tags: payload.tags,
                notes: payload.notes
            });

        },
        /* edit: (state, action) => {
             const{payload} = action;

             const editedBookmark = state.find(b => b.id === b.id);

             /!*if (editedBookmark) {
                 editedBookmark.name = payload.name,
                 editedBookmark.url = payload.url,
                 editedBookmark.tags = payload.tags,
                 editedBookmark.notes = payload.notes
             }*!/
         },*/
        remove(state, action) {
            console.log(JSON.stringify(state))
            const i = state.findIndex(b => b.id === action.payload);
            state.splice(i, 1);
        }
    }
});

export const {add, edit, remove} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
