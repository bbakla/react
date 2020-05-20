import InputForm from "./InputForm";
import CountClicker from "./CountClicker";
import ObjectStateVariable from "./ObjectStateVariable";
import React from "react";

export default function UseState() {

    return (
        <div className="container">
            <div className="row">
                <InputForm/>
            </div>

            <div className="row mt-5">
                <CountClicker/>
            </div>

            <div className="row mt-5">
                <ObjectStateVariable/>
            </div>

        </div>
    );

}
