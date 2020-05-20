import React, {useState, useEffect} from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../../api/courseApi";
//import {saveCourse} from "../../api/courseApi";
import {toast} from "react-toastify";
import courseStore from "../../stores/courseStore";
import * as courseActions from '../../actions/courseActions';

const ManageCoursePage = props => {
    const [errors, setErrors] = useState({});
    const [courses, setCourses] = useState(courseStore.getCourses());
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    });

  /*  useEffect(() => {
        const slug = props.match.params.slug;
        if(slug) {
            courseApi.getCourseBySlug(slug).then(c => setCourse(c));
        }
    }, [props.match.params.slug]);*/

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        const slug = props.match.params.slug;
        if(courses.length === 0) {
            courseActions.loadCourses();
        }else if(slug) {
            setCourse(courseStore.getCourseBySlug(slug));
        }

        return () => courseStore.removeChangeListener(onChange);
    }, [props.match.params.slug, courses.length]);

    function onChange() {
        setCourses(courseStore.getCourses());

    }
    
    function handleChange(event) {
        setCourse({...course, [event.target.name]: event.target.value});
    }

    function formIsValid() {
        const _errors = {};

        if (!course.title) {
            _errors.title = "Title is required";
        }

        if (!course.authorId) {
            _errors.authorId = "Author is required";
        }

        if (!course.category) {
            _errors.category = "Category is required";
        }
        setErrors(_errors);

        return Object.keys(_errors).length === 0;
    }

    /*const saveCourse = e => {
        e.preventDefault();
        if (!formIsValid()) {
            return;
        }
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course saved");
        });
    }*/

    const saveCourse = e => {
        e.preventDefault();
        if (!formIsValid()) {
            return;
        }
        courseActions.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success("Course saved");
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm
                errors={errors}
                course={course}
                onChange={handleChange}
                onSaveCourse={saveCourse}
            />
        </>
    );
};

export default ManageCoursePage;
