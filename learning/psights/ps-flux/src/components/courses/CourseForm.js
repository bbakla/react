import React from "react";
import TextInput from "./TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
    return (
        <form onSubmit={props.onSaveCourse}>
            <TextInput
                inputName="title"
                labelText="Title"
                onFieldChange = {props.onChange}
                inputValue={props.course.title}
                error={props.errors.title}
            ></TextInput>

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        onChange={props.onChange}
                        value={props.course.authorId || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                    {props.errors.authorId && (
                        <div className="alert alert-danger">{props.errors.authorId}</div>
                    )}
                </div>
            </div>

            <TextInput
                inputName="category"
                labelText="Category"
                onFieldChange = {props.onChange}
                inputValue={props.course.category}
                error={props.errors.category}
            ></TextInput>

            <input type="submit" value="Save"  className="btn btn-primary" />
        </form>
    );
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    onSaveCourse: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default CourseForm;
