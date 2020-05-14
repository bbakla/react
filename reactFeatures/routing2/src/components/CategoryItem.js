import React, {Component} from "react";
import {useParams} from "react-router-dom";

export const  CategoryItem = () => {

        let params = useParams();

        return (
            <div className="text-body text-center">
                    <h3>CategoryId</h3>
                <h3 >{params.item}</h3>
            </div>
        );
}
