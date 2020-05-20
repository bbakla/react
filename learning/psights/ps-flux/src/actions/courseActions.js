import dispatcher from "../appDispatcher";
import * as courseApi from '../api/courseApi';
import actionTypes from "./actionTypes";

//action creator
export function saveCourse(course) {
    return courseApi.saveCourse(course).then(savedCourse => {
       //when this function is called, it informs all registered stores that a course is created.
        dispatcher.dispatch({
           //action
           actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE, //actionType
           course: savedCourse //action payload
       });
    });
}

export function loadCourses() {
    return courseApi.getCourses().then(courses => {
        //when this function is called, it informs all registered stores that a course is created.
        dispatcher.dispatch({
            //action
            actionType: actionTypes.LOAD_COURSES, //actionType
            courses: courses //action payload
        });
    });
}

export function deleteCourse(id) {
    return courseApi.deleteCourse(id).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_COURSE,
            id : id
        })
    });

}
