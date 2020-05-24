import React, {createRef, useContext, useEffect} from "react";
import {VideoContext} from "./VideoMainPage";


export default function VideoClip() {
    const {status} = useContext(VideoContext);
    const videRef = createRef();

    const videoStyle = {
        marginTop: '100px',
        width: '50vw',
    };

    useEffect(() => {
        if(status === 'playing') {
            videRef.current.play();
        } else if(status === 'paused') {
            videRef.current.pause();
        }
    });

    return (
        <video style={videoStyle} controls ref={videRef}>
            <source src="https://react-context.s3.eu-central-1.amazonaws.com/Pouring+Of+Milk.mp4"
                    type="video/mp4"/>
        </video>
    );
}
