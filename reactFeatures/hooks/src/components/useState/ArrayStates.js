import React, {Component, useState} from "react";

export default function ArrayStates() {

    const initData = [
        {
            projectName: "first",
            projectId: 1
        },
        {
            projectName: "second",
            projectId: 2
        }
    ]

    const [projectList, setProjectList] = useState(initData);
    const [counter, setCounter] = useState(3);
    const [project, setProject] = useState("");


    const saveProject = (e) => {
        e.preventDefault();
        let count = counter;
        setProjectList(projects => [...projects, {projectName: project, projectId: count}])

        setCounter(count++);
        setProject("");
    }

    const deleteProject = (projectName) => {

        setProjectList(projectList.filter(p => p.projectName !== projectName))
    }

    return(
        <div>
            <div className="container">
                <form className="ml-5 mt-3" onSubmit={e => saveProject(e)}>
                    <div className="form-group">
                        <input type="text" defaultValue={project} className="form-control"
                               placeholder="Enter project name"
                               name="name"
                               key="name"
                               onChange={e => setProject(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-block  btn-primary">Submit</button>
                </form>
            </div>
            <div>
                {

                    <table className="table mt-5">
                        <thead>
                        <tr>
                            <th>Project Id</th>
                            <th>Project name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {projectList.map(project =>
                            <tr>
                                <td>{project.projectId}</td>
                                <td>{project.projectName}</td>
                                <td><button className="button" onClick={() => deleteProject(project.projectName)}>Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>

                }

            </div>
        </div>
    );
}
