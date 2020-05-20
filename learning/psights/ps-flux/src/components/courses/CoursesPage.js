import React, {useEffect, useState} from "react";
import {getCourses} from "../../api/courseApi"
import CourseList from "./CourseList";
import {Link} from "react-router-dom";
import courseStore from "../../stores/courseStore";
import * as courseApi from "../../api/courseApi";
import {toast} from "react-toastify";
import {loadCourses, deleteCourse} from "../../actions/courseActions";

export default function CoursesPage(props) {
    const [courses, setCourses] = useState(courseStore.getCourses());

    //before flux
/*    useEffect(() => {
             getCourses().then(courseList =>   {
                 setCourses(courseList);
             });
    }, []);*/

    useEffect(() => {
        courseStore.addChangeListener(onCourseChange);
        if(courseStore.getCourses().length === 0) {
            loadCourses().then();
        }

        return() => courseStore.removeChangeListener(onCourseChange); //unmount the listener

    }, []);

    function onCourseChange() {
        setCourses(courseStore.getCourses());
    }

    return(
        <>
            <h2>We have courses</h2>
            <Link to="/course" className="btn btn-primary">Add Course</Link>
            <CourseList courses = {courses} deleteCourse={deleteCourse}/>

        </>
    );
}
