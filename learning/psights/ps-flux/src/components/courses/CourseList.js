import React from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

export default function CourseList(props) {

    return(
        <>
            <table className="table">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author Id</th>
                    <th>Category</th>
                </tr>
                </thead>

                <tbody>
                {
                    props.courses.map(c => {
                        return (<tr key={c.id}>
                            <td><button className="btn btn-outline-danger"
                                        onClick={() => {
                                            props.deleteCourse(c.id);
                                            toast.dark(c.title + " deleted");
                                        }}
                            >Delete</button></td>
                            <td><Link to={"/course/" + c.slug}>{c.title}</Link></td>
                            <td>{c.authorId}</td>
                            <td>{c.category}</td>
                        </tr>);
                    })
                }
                </tbody>
            </table>
        </>
    );
}
