import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {remove} from "./bookmarkSlice";

export default function BookmarkList() {
    const bookmarks = useSelector(state => state.bookmarks);
    const dispatch = useDispatch();

    const deleteBookmark = (id) => {

        dispatch(remove(id));
    };

    function tableHeaders() {
        return (
            <thead>
            <tr>
                <th>Name</th>
                <th>Id</th>
                <th>Url</th>
                <th>Notes</th>
                <th>Tags</th>
            </tr>
            </thead>
        );
    }

    function tableRows() {
        return (
            <tbody>
            {
                bookmarks.map(b => (
                    <tr key={b.id}>
                        <td scope="row">{b.name}</td>
                        <td>{b.id}</td>
                        <td>{b.url}</td>
                        <td>{b.notes}</td>
                        <td>{b.tags}</td>
                        <td>
                            <button className="button btn-warning" onClick={() => deleteBookmark(b.id)}>Delete bookmark
                            </button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        );

    }

    return (
        <>
            <table className="table table-hover" >
                {tableHeaders()}
                {tableRows()}
            </table>
        </>

    );
}
